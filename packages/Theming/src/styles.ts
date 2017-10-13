import { memoize, hash, CHANNEL } from '@slup/common'
import { Sheet } from './sheet'
import { internal_isUnitlessNumber as UNITLESS } from 'inferno'
import Stylis from 'stylis'

export const sheet = new Sheet()

sheet.inject()

const externalStylisPlugins = []

let queue = []
let parentQueue = []

const Plugin =  insertRule =>
  function insertionPlugin(
    context,
    content,
    selectors,
    parents,
    line,
    column,
    length,
    id
  ) {

    switch (context) {
      case -2: {
        queue.forEach(insertRule)
        queue = []
        parentQueue = []
        break
      }

      case 2: {
        if (id === 0) {
          const selector = selectors.join(',')
          let parent = parents.join(',')
          const rule = `${selector}{${content}}`
          let index = parentQueue.indexOf(selector)
          if (index === -1) {
            index = parentQueue.length
          } else {
            let length = queue.length
            while (length--) {
              if (parentQueue[length] === selector) {
                parentQueue[length] = undefined
              }
            }
          }
          queue.splice(index, 0, rule)
          parentQueue.splice(index, 0, parent)
        }
        break
      }
      // after an at rule block
      case 3: {
        let parent = parents.join(',')
        parentQueue.push(parent)
        let chars = selectors.join('')
        const second = chars.charCodeAt(1)
        let child = content
        switch (second) {
          // s upports
          case 115:
          // d ocument
          // eslint-disable-next-line no-fallthrough
          case 100:
          // m edia
          // eslint-disable-next-line no-fallthrough
          case 109: {
            queue.push(chars + '{' + child + '}')
            break
          }
          // k eyframes
          case 107: {
            chars = chars.substring(1)
            child = chars + '{' + child + '}'
            queue.push('@-webkit-' + child)
            queue.push('@' + child)
            parentQueue.push(parent)
            break
          }
          default: {
            queue.push(chars + child)
            break
          }
        }
      }
    }
  }

const stylisOptions = {
  keyframe: false,
  compress: false
}

const insertionPlugin = Plugin(_insertRule)

if (process.env.NODE_ENV !== 'production') {
  stylisOptions.compress = false
}

let stylis: any = new Stylis(stylisOptions)

const use = stylis.use

stylis.use(insertionPlugin)

function _insertRule(rule) {
  sheet.insert(rule, currentSourceMap)
}

export let registered = {}

export let inserted = {}

let currentSourceMap = ''

function handleInterpolation(
  interpolation: any,
  couldBeSelectorInterpolation: boolean
) {
  if (interpolation == null) {
    return ''
  }

  switch (typeof interpolation) {
    case 'boolean':
      return ''
    case 'function':
      return handleInterpolation.call(
        this,
        this === undefined
          ? interpolation()
          : interpolation(this.mergedProps, this.context),
        couldBeSelectorInterpolation
      )
    case 'object':
      return createStringFromObject.call(this, interpolation)
    default:
      const cached = registered[interpolation]
      return couldBeSelectorInterpolation === false && cached !== undefined
        ? cached
        : interpolation
  }
}

const hyphenateRegex = /[A-Z]|^ms/g

const processStyleName = memoize(styleName =>
  styleName.replace(hyphenateRegex, '-$&').toLowerCase()
)

const processStyleValue = (key, value) => {
  if (value === undefined || value === null || typeof value === 'boolean')
    return ''

  if (UNITLESS[key] !== true && !isNaN(value) && value !== 0) {
    return value + 'px'
  }
  return value
}

const objectToStringCache = new WeakMap()

function createStringFromObject(obj) {
  if (objectToStringCache.has(obj)) {
    return objectToStringCache.get(obj)
  }
  let string = ''

  if (Array.isArray(obj)) {
    obj.forEach(function (interpolation) {
      string += handleInterpolation.call(this, interpolation, false)
    }, this)
  } else {
    Object.keys(obj).forEach(function (key) {
      if (typeof obj[key] !== 'object') {
        if (registered[obj[key]] !== undefined) {
          string += `${key}{${registered[obj[key]]}}`
        } else {
          string += `${processStyleName(key)}:${processStyleValue(
            key,
            obj[key]
          )};`
        }
      } else {
        string += `${key}{${handleInterpolation.call(this, obj[key], false)}}`
      }
    }, this)
  }
  objectToStringCache.set(obj, string)

  return string
}

function isLastCharDot(string) {
  return string.charCodeAt(string.length - 1) === 46 // .
}

function createStyles(strings?, ...interpolations) {
  let stringMode = true
  let styles = ''
  if (strings == null || strings.raw === undefined) {
    stringMode = false
    styles = handleInterpolation.call(this, strings, false)
  } else {
    styles = strings[0]
  }

  interpolations.forEach(function (interpolation, i) {
    styles += handleInterpolation.call(
      this,
      interpolation,
      isLastCharDot(styles)
    )
    if (stringMode === true && strings[i + 1] !== undefined) {
      styles += strings[i + 1]
    }
  }, this)

  return styles
}

export function css(...args) {
  const styles = createStyles.apply(this, args)

  const _hash = hash(styles)
  const cls = `css-${_hash}`

  if (registered[cls] === undefined) {
    registered[cls] = styles
  }
  if (inserted[_hash] === undefined) {
    stylis(`.${cls}`, styles)
    inserted[_hash] = true
  }
  return cls
}

export function injectGlobal(...args) {
  const styles = createStyles(...args)
  const _hash = hash(styles)
  if (inserted[_hash] === undefined) {
    stylis('', styles)
    inserted[_hash] = true
  }
}

export function keyframes(...args) {
  const styles = createStyles(...args)
  const _hash = hash(styles)
  const name = `animation-${_hash}`
  if (inserted[_hash] === undefined) {
    stylis('', `@keyframes ${name}{${styles}}`)
    inserted[_hash] = true
  }
  return name
}

export function fontFace(...args) {
  const styles = createStyles(...args)
  const _hash = hash(styles)
  if (inserted[_hash] === undefined) {
    stylis('', `@font-face{${styles}}`)
    inserted[_hash] = true
  }
}

export function getRegisteredStyles(registeredStyles, classNames) {
  let rawClassName = ''

  classNames.split(' ').forEach(className => {
    if (registered[className] !== undefined) {
      registeredStyles.push(className)
    } else {
      rawClassName += `${className} `
    }
  })
  return rawClassName
}

export function merge(className, sourceMap) {
  const registeredStyles = []

  const rawClassName = getRegisteredStyles(registeredStyles, className)

  if (registeredStyles.length < 2) {
    return className
  }
  return rawClassName + css(registeredStyles, sourceMap)
}

export function hydrate(ids) {
  ids.forEach(id => {
    inserted[id] = true
  })
}

export function flush() {
  sheet.eject()
  inserted = {}
  registered = {}
  sheet.inject()
}