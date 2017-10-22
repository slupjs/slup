/** Utils */
import { memorize, hash, CHANNEL } from '@slup/common'

/** Local helpers */
import { Sheet } from './sheet'
import Plugin from './plugin'
import { 
  sanitizeName, 
  sanitizeStyle, 
  sanitizeObject, 
  isLastCharDot 
} from './helpers'

/** Styles processor */
import * as Stylis from 'stylis'

import { Interpolation } from '../interfaces'

/** Declare constats used by other modules */
export const SHEET = new Sheet()
export let REGISTERED = {}
export let INSERTED = {}

/** Insert the stylesheet into the document */
SHEET.inject()

/** Plugin for stylis that add -webkit and -moz prefixes */
const PLUGIN = Plugin(rule => SHEET.insert(rule))

/** Stylis compiler */
const stylis = new Stylis({ keyframe: false, compress: true })

/** Enable the plugin for stylis */
stylis.use(<any>PLUGIN)


/**
 * Handles each TemplateLitteral interpolation and resolves complex
 * cases like objects, functions(for themes or computed values) and returns
 * a string readable from the stylis SCSS compiler
 * 
 * @param interp Interpolation. Can be a string, an object or a function
 * @param selector Defines if the interpolation is a valid hashed selector 
 */
export function handleInterpolation(interp: Interpolation, selector: boolean): string {
  /** Ignore nulls */
  if(interp == null) return ''

  switch(typeof interp) {
    /** Ignore booleans */
    case 'boolean':
      return ''

    /** 
     * If we recive a function we call it to get
     * the value. That's often used for calculations
     * of with a ThemeProvider
     */
    case 'function':
      return handleInterpolation.call(
        this, /** Pass the scope(necessary for themeProviders) */

        /** Calls the interpolation with the props and the context */
        interp(this.mergedProps, this.context)
      )
  
    case 'object': 
      return sanitizeObject.call(this, interp)

    default:
      /** Check if it's cached */
      const cached = REGISTERED[<any>interp]

      /** 
       * If the interpolation is not a selector(ex. keyframe hash)
       * and it's cached, return it instead of computating it again.
       * 
       * Otherwhise we assue it's a simple string and we just return it
       */
      return selector === false && cached !== undefined 
        ? cached
        : interp
  }
}

/**
 * Create styles based upon string interpolations
 * 
 * @param strings Array of strings
 * @param interps Array of interpolations
 */
export function createStyles(strings?: TemplateStringsArray, ...interps: Interpolation[]) {
  let stringNode = true
  let styles: string[] = []

  /** If the strings aren't defined */
  if(strings == null || strings.raw === undefined) {
    stringNode = false
    styles.push(handleInterpolation.call(this, strings, null))
  } else {
    styles.push(strings[0])
  }

  interps.forEach(function(interp, i) {
    styles.push(handleInterpolation.call(
      this,
      interp,
      isLastCharDot(styles.join(''))
    ))

    /** If the strings argument contained some interpolation itself */
    if(stringNode && strings[i + 1] !== undefined) {
      styles.push(strings[i + 1])
    }
  }, this)


  return styles.join('')
}

/**
 * Generates a className for the given css and returns it.
 * The css gets appied to the page if it hasn't already
 * 
 * @param args List of css(es) to be applied to this tag
 */
export function css(...args: string[]): string {
  /** Convert styles into a readable string */
  const styles = createStyles.apply(this, args)

  /** Generate the hash for the style */
  const HASH = hash(styles)

  /** Puts the prefix to the className */
  const CLASS = `css-${HASH}`

  /** If the css already exists */
  if(REGISTERED[CLASS] === undefined) {
    /** Save the styles for future duplicate usage */
    REGISTERED[CLASS] = styles
  } 

  /** If it hasn't ever been inserted, apply it to the StyleSheet */
  if(INSERTED[HASH] === undefined) {
    stylis(`.${CLASS}`, styles)

    /** Remind that the style has already been applied */
    INSERTED[HASH] = true
  }

  return CLASS
}

/**
 * Injects styles into the global stylesheet, 
 * without a selector. Useful for body or global styles
 * 
 * @param args Interpolations of styles
 */
export function injectGlobal(...args) {
  /** Convert styles into a readable string */
  const styles = createStyles.apply(this, args)

  /** Generate the hash for the style */
  const HASH = hash(styles)

  /** If it hasn't ever been inserted, apply it to the StyleSheet */
  if (INSERTED[HASH] === undefined) {
    stylis('', styles)

    /** Remind that the style has already been applied */
    INSERTED[HASH] = true
  }
}

/**
 * Applies a keyframe and returns the animation's hash
 * 
 * Usage: 
 * 
 * const animation = keyframe`from {} to {}`
 * const element = styled.div`
 *   animation: ${animation} 1s linear;
 * `
 * 
 * @param args Interpolations for the keyframe
 */
export function keyframes(...args): string {
  /** Convert styles into a readable string */
  const styles = createStyles.apply(this, args)

  /** Generate the hash for the animation */
  const HASH = hash(styles)

  /** Puts the prefix to the animationName */
  const NAME = `animation-${HASH}`

  /** If it hasn't ever been inserted, apply it to the StyleSheet */
  if (INSERTED[HASH] === undefined) {
    stylis('', `@keyframes ${NAME}{${styles}}`)

    /** Remind that the style has already been applied */
    INSERTED[HASH] = true
  }

  return NAME
}

/**
 * Applies a fontFace css selector to the global styleSheet
 * 
 * @param args Interpolations of fontFamilies
 */
export function fontFace(...args) {
  /** Convert styles into a readable string */
  const styles = createStyles.apply(this, args)

  /** Generate the hash for the font */
  const HASH = hash(styles)

  /** If it hasn't ever been inserted, apply it to the StyleSheet */
  if (INSERTED[HASH] === undefined) {
    stylis('', `@font-face{${styles}}`)

    /** Remind that the style has already been applied */
    INSERTED[HASH] = true
  }
}

/**
 * Pushes names of all the registered classes to the first argument
 * Returns unregistered names as a string
 * 
 * @param registered Array where items should be pushed
 * @param names Class of a selector  to be checked
 */
export const getRegisteredStyles = (registered: string[], names: string): string => {
  const rawName: string[] = []

  names.split(' ').forEach(name => {
    /** If the className has already been registered */
    if(REGISTERED[name]) {
      registered.push(name)
    } else {
      rawName.push(name)
    }
  })

  return rawName.join(' ')
}

/**
 * Merges multiple styled together
 * 
 * @param name className for the previous style
 */
export const merge = (name: string) => {
  const registered: string[] = []
  const rawName = getRegisteredStyles(registered, name)

  /** If we don't have any style to merge */
  if (registered.length < 2) {
    return name
  }

  return rawName + css(...registered)
}

/** 
 * Hydratates ids of styled already
 * applied in Server Side Rendering!
 * ⚡️⚡️⚡️
 * 
 * @param ids Array of strings(ids)
 */
export function hydrate(ids: string[]) {
  ids.forEach(id => INSERTED[id] = true )
}

/** Resets the styles */
export const flush = () => {
  SHEET.eject()
  INSERTED = {}
  REGISTERED = {}
  SHEET.inject()
}