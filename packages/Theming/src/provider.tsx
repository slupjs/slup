import Inferno   from 'inferno'
import Component from 'inferno-component'
import { Children } from 'inferno-compat'
import { CHANNEL } from '@slup/common'
import { bind }  from 'decko'

import { Emitter } from './emitter'
import { ITheme, IITheme, IProps, IListener, IEmitter } from './interfaces'

export const toArray = items =>
  items instanceof Array ? items : [items]

export class ThemeProvider extends Component<IProps, null> {
  private unsubscribeToOuterId: number = null
  private outerTheme: IITheme = null
  private emitter: Emitter = null

  /**
   * Lifecycle: checks for a previous context
   * and ditches it in favor of a brand new one.
   * 
   * Then creates a new emitter
   */
  public componentWillMount() {
    this.emitter = new Emitter(this.props.theme)
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

      [CHANNEL]: this.emitter

    }
  }

  /**
   * Takes a theme generator function or a theme
   * and returns the merged theme with the outer.
   * 
   * @param passedTheme Theme to be analized
   */
  private getTheme(passedTheme: ITheme): IITheme {
    let theme = passedTheme || this.props.theme

    /** 
     * Executes the theme if it's a function 
     * otherwhise just returns the two merges themes
     */
    if(typeof theme == 'function') {
      return theme(this.outerTheme)
    } else {
      return { ...this.outerTheme, ...theme }
    }
  }

  /**
   * Renders the children, passing the context
   */
  public render({ children }: IProps): any[] {
    if (toArray(children).length !== 1) {
      throw Error('Inferno Error: Only one child is allowed within the `Provider` component')
    }

    return children
  }
}