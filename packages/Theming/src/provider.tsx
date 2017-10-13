import Inferno   from 'inferno'
import Component from 'inferno-component'
import { Children } from 'inferno-compat'
import { bind }  from 'decko'

import { Emitter, Listener } from './emitter'
import { ITheme, _ITheme, IProps } from './interfaces'

/** Context channes for compatibility with styled-components */
export const CHANNEL      = '__slup__'
export const CHANNEL_NEXT = `${CHANNEL}next__`

export const toArray = items =>
  items instanceof Array ? items : [items]

export class ThemeProvider extends Component<IProps, null> {
  private unsubscribeToOuterId: number = null
  private outerTheme: _ITheme = null
  private emitter: Emitter = null

  /**
   * Lifecycle: checks for a previous context
   * and ditches it in favor of a brand new one.
   * 
   * Then creates a new emitter
   */
  public componentWillMount() {
    /** Context defined previously outside of this provider */
    const outerEmitter: Emitter = this.context[CHANNEL_NEXT]

    if (outerEmitter !== undefined) {
      this.unsubscribeToOuterId = outerEmitter.subscribe(theme => {
        this.outerTheme = theme
      })
    }

    this.emitter = new Emitter(this.props.theme)
  }

  /**
   * Lifecycle: When the component gets unmounted we
   * remove the listeners from the outer context
   */
  public componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      /** Context defined previously outside of this provider */
      const outerEmitter: Emitter = this.context[CHANNEL_NEXT]

      /** Unsubscribes from the listenin on the outer provider */
      outerEmitter.unsubscribe(this.unsubscribeToOuterId)
    }
  }

  /**
   * Lifecycle: listens for changes in the theme
   * prop and updates all the listener with the new data
   */
  public componentWillReceiveProps({ theme }: IProps) {
    if(this.props.theme !== theme) {
      this.emitter.publish(this.getTheme(theme))
    }
  }

  /**
   * Builds up the context from keeping the
   * outside provider where the current one
   * doesn't change anything.
   */
  public getChildContext() {
    return {
      ...this.context,

      [CHANNEL_NEXT]: {
        getTheme: this.getTheme,
        subscribe: this.emitter.subscribe,
        unsubscribe: this.emitter.unsubscribe,
      },

      [CHANNEL]: (fn: Listener) => {

        /**
         * Patch the old `subscribe` provide via `CHANNEL` for older clients.
         */
        const id = this.emitter.subscribe(fn)
        return () => this.emitter.unsubscribe(id)
      }

    }
  }

  /**
   * Takes a theme generator function or a theme
   * and returns the merged theme with the outer.
   * 
   * @param passedTheme Theme to be analized
   */
  private getTheme(passedTheme: ITheme): _ITheme {
    let theme = passedTheme || this.props.theme

    /** 
     * Executes the theme if it's a function 
     * otherwhise just returns the two merges themes
     */
    if(typeof theme == 'function')

      return theme(this.outerTheme)

    else

      return { ...this.outerTheme, ...theme }
    
  }

  /**
   * Renders the children, passing the context
   */

  static render = console.log

  /** 
  public render({ children }: IProps): any[] {
    if (toArray(children).length !== 1) {
      throw Error('Inferno Error: Only one child is allowed within the `Provider` component')
    }

    console.log(children) 

    return children
  }
  */
}