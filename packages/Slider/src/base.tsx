import Inferno, { linkEvent } from 'inferno'
import Component from 'inferno-component'

import { IBaseProps, IBaseState } from './interfaces'
import { capitalize, vise } from '@slup/common'
import { Container, Line, Track, Thumb } from './parts'

export class Slider extends Component<IBaseProps, IBaseState> {
  public state = { mouseDown: false }
  public slider: HTMLElement = null

  private emit(type: string, value?: any) {
    const eventName = 'on' + capitalize(type)
    if(typeof this.props[eventName] == 'function') {
      this.props[eventName](value)
    }
  }

  public componentWillMount() {
    document.body.addEventListener('mousemove', event => this.handleMouseMove(this, event))
    document.body.addEventListener('mouseup', event => this.handleMouseUp(this, event))
  }

  public componentWillUnmount() {
    document.body.removeEventListener('mousemove', event => this.handleMouseMove(this, event))
    document.body.removeEventListener('mouseup', event => this.handleMouseUp(this, event))
  }

  /**
   * Change the value of the slider by the current
   * mouse position and the offset of the container
   *
   * @param {MouseEvent} event The mouse position
   */
  private gatherProgress({ clientX }) {
    const { offsetLeft, clientWidth } = this.slider
    const percentage = (clientX - offsetLeft) / clientWidth

    return vise(0, percentage, 1) * this.props.max
  }

  /**
   * Handles the mouse movement that
   * changes the slider's value
   *
   * @param  {Class} this  The local class
   * @param  {MouseEvent} event The mouseDown event
   * @return {null}
   */
  private handleMouseDown(self, event: Event) {
    self.setState({ mouseDown: true })
    self.emit('focus')
    self.emit('change', self.gatherProgress(event))
  }

  /**
   * Stops the slider from updating its value
   */
  private handleMouseUp(self, event: Event) {
    self.setState({ mouseDown: false })
    self.emit('blur')
  }

  /**
   * Handles the change of the slider's vlaue
   *
   * @param  {Class} this  The local class
   * @param  {MouseEvent} event The mouseMove event
   * @return {null}
   */
  private handleMouseMove(self, event: Event) {
    /** Ignore moves when unfocused */
    if (!self.state.mouseDown) return

    if (self.props.steps) {
      const perc  = self.gatherProgress(event)
      const value = self.props.max / self.props.steps
      const index = Math.round(perc / value)

      return this.emit('change', index * value)
    }

    self.emit('change', self.gatherProgress(event))
  }

  /**
   * Changes the value of the slider
   * depending on the pressed keyboard arrows
   *
   * @param  {Class} this The local class
   * @param  {KeyboardEvent} event The keyboardDown event
   * @return {null}
   */
  private handleKeyDown(self, event: KeyboardEvent) {
    const { value, max, steps } = self.props
    const percentage: number = !steps ? 1 : max / steps
    let _value: number

    switch(event.keyCode) {
      /** Increase the value by 1 */
      case 38:
      case 39:
        _value = vise(0, value + percentage, max)
        self.emit('change', _value)
      break

      /** Decrease the value by 1 */
      case 40:
      case 37:
        _value = vise(0, value - percentage, max)
        self.emit('change', _value)
      break
    }
  }

  /**
   * Renders the JSX element
   * @return {JSX Element} The basic slider element
   */
  public baseRender({
      max, value, focused, primary, disabled, CustomThumb,
      children, onFocus, onChange, onBlur, ...props
    }, state?, context?) {

    const percentage = value / max * 100 + '%'
    const mainProps = {
      focused,
      primary,
      value,
      disabled
    }

    return(
      <Container
        innerRef={e => this.slider = e}
        tabindex={disabled ? -1 : 0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={linkEvent(this, this.handleMouseDown)}
        onKeyDown={linkEvent(this, this.handleKeyDown)}
        disabled={disabled}
        value={value}
      >
        <Line disabled={disabled} value={value}>
          <Track {...mainProps} style={{ width: percentage }} />
        </Line>

        {CustomThumb
          ? <CustomThumb {...mainProps} style={{left: percentage}} />
          : <Thumb {...mainProps} style={{left: percentage}} />
        }

        {children}
      </Container>
    )
  }

  /**
   * Alias the inferno's render to the `baseRender`
   * if the class isn't inherited
   */
  public render(props, state, context) {
    return this.baseRender(props, state, context)
  }
}
