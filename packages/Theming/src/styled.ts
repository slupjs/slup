import { getRegisteredStyles, css } from './styles'
import Component from 'inferno-component'
import { createVNode } from 'inferno'
import { CHANNEL } from '@slup/common'

function setTheme(theme) {
  this.setState({ theme })
}

function componentWillMount() {
  if (this.context[CHANNEL] !== undefined) {
    this.unsubscribe = this.context[CHANNEL].subscribe(setTheme.bind(this))
  }
}
function componentWillUnmount() {
  if (this.unsubscribe !== undefined) {
    this.context[CHANNEL].unsubscribe(this.unsubscribe)
  }
}

const testOmitPropsOnComponent = key => key !== 'theme' && key !== 'innerRef'
const testAlwaysTrue = () => true

export const styled = (tag, options: { e: string }) => {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error(
        'You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.'
      )
    }
  }
  let staticClassName: any = false
  if (options !== undefined && options.e !== undefined) {
    staticClassName = options.e
  }
  const isReal = tag.__emotion_real === tag
  const baseTag =
    staticClassName === false ? (isReal && tag.__emotion_base) || tag : tag

  return (strings, ...interpolations) => {
    let styles = (isReal && tag.__emotion_styles) || []
    if (staticClassName === false) {
      if (strings == null || strings.raw === undefined) {
        styles = styles.concat(strings, interpolations)
      } else {
        styles = interpolations.reduce(
          (array, interp, i) => array.concat(interp, strings[i + 1]),
          styles.concat(strings[0])
        )
      }
    }

    class Styled extends Component<any, any> {
      private mergedProps: any = null

      public static withComponent = nextTag =>
        styled(nextTag, options)(styles)

      public static displayName: string = null
      public static __emotion_styles: any
      public static __emotion_base: any
      public static __emotion_real: any

      render({ children, innerRef, key, ...props }) {
        const { state } = this
        this.mergedProps = Object.assign(testAlwaysTrue, {}, props, {
          theme: (state !== null && state.theme) || props.theme || {}
        })

        let className = ''
        let classInterpolations = []

        if (props.className) {
          if (staticClassName === false) {
            className += getRegisteredStyles(
              classInterpolations,
              props.className
            )
          } else {
            className += `${props.className} `
          }
        }

        if (staticClassName === false) {
          className += css.apply(this, styles.concat(classInterpolations))
        } else {
          className += staticClassName
        }

        return createVNode(
          2, 
          'div',
          className,
          children,
          props,
          key,
          innerRef
        )
      }
    }

    Styled.prototype.componentWillMount = componentWillMount
    Styled.prototype.componentWillUnmount = componentWillUnmount
    Styled.__emotion_styles = styles
    Styled.__emotion_base = baseTag
    Styled.__emotion_real = Styled

    Styled.displayName = `Styled(${typeof baseTag === 'string'
      ? baseTag
      : baseTag.displayName || baseTag.name || 'Component'})`

    return Styled
  }
}