import { createVNode } from 'inferno'
import Component       from 'inferno-component'
import { CHANNEL }     from '@slup/common'

/** Styling utils */
import { getRegisteredStyles, css } from './styles'

/** Typings */
import { IStyledState, IStyledProps, ITheme, IEmitter } from './interfaces'

export const styled = (_tag: any) => 

  (strings: TemplateStringsArray, ...interpolations: (string | Function)[]) => {

    /** Is the component yet another styled component? */
    const isStyled = _tag.__slup__tag == _tag

    /** 
     * Generate the real tag, since we're going
     * to use the parent's tag if it was a styled
     */
    const tag = isStyled
      ? _tag.__slup__base
      : _tag

    /** Styles from the previous component(tag) */
    let styles = isStyled ? _tag.__slup__styles : []

    
    if (strings == null || strings.raw === undefined) {
      /** The wrapper didn't have any styles */
      styles = styles.concat(strings, interpolations)
    
    } else {

      /** Merge the two stylings together */
      styles = interpolations.reduce(
        (array, interp, i) => array.concat(interp, strings[i + 1]),
        styles.concat(strings[0])
      )
    }

    /** 
     * The styled pseudo-component
     * 
     * @see Styled.render
     */
    class Styled extends Component<IStyledProps, IStyledState> {
      /** Preload the state with an empty object */
      public state: IStyledState = {}

      /**
       * Reference for itself to check if the actual
       * component we're going to style is yet another
       * styled-component, and so merge both styles
       */
      public static __slup__tag:  any = null

      /** Base tag, for the same purpuse as before */
      public static __slup__base: any = null

      /** Styles applied, for the same purpuse as before */
      public static __slup__styles: TemplateStringsArray = null

      /** Renders the component with a different baseTag */
      public static withComponent = nextTag =>
        styled(nextTag)(styles)

      private mergedProps: IStyledProps = null
      private unsubscribe: number = null

      /**
       * Binds the setTheme method to itself
       */
      constructor() {
        super()

        this.setTheme = this.setTheme.bind(this)
      }

      /**
       * Updates the component's current theme
       * 
       * @param theme Object epresenting the new theme from the Provider
       */
      private setTheme(theme) {
        this.setState({ theme })
      }

      /**
       * When the component will mount we start to listen
       * for theme changes in the context
       */
      public componentWillMount() {
        const channel: IEmitter = this.context[CHANNEL]

        /** If the context channel exists */
        if(channel !== undefined) {

          /**
           * We save the unsubscribe function returned by the subscribing 
           * in the local class for the unmounting event later on
           * 
           * @see componentWillUnmount
           */
          this.unsubscribe = channel.subscribe(this.setTheme)
        }
      }

      public componentWillUnmount() {
        const channel: IEmitter = this.context[CHANNEL]

        /** If we're subscribed to any context this will be avaible */
        if(typeof this.unsubscribe == 'number') {
          channel.unsubscribe(this.unsubscribe)
        }
      }

      /**
       * Renders the component template for the styled function
       * 
       * @param props Props for the component template
       */
      public render({ children, innerRef, key, theme, ...props }, state): any {
        this.mergedProps = {
          ...props,
          theme: state.theme || theme || {}
        }

        let className = ''
        let classInterpolations = []

        /** 
         * If we already have a classname, find out
         * wich hash did the other element have
         */
        if(props.className) {
          className += getRegisteredStyles(
            classInterpolations,
            props.className
          )
        }

        /** Stack up our new styles */
        className += css.call(this, styles.concat(classInterpolations))

        return createVNode(
          2,
          tag,
          className,
          children,
          props,
          key,
          innerRef
        )
      }

    }

    Styled.__slup__styles = styles
    Styled.__slup__base   = tag
    Styled.__slup__tag    = Styled

    return Styled

  }