import { linkEvent, Component } from 'inferno'

import { IBaseProps, IBaseState } from './interfaces'
import { capitalize, vise } from '@slup/common'
import { Container, Line, Track, Thumb } from './parts'
import { Indicator } from './discrete'

export class Slider extends Component<IBaseProps, IBaseState> {
  public state = { mouseDown: false }
  public slider: HTMLElement = null

  private emit(type: string, value?: any) {
    const eventName = 'on' + capitalize(type)
    if(typeof this.props[eventName] == 'function') {
      this.props[eventName](value)
    }
  }

  public componentDidMount() {
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
   * @param  {Class} self  The local class
   * @param  {MouseEvent} event The mouseDown event
   * @return {null}
   */
  private handleMouseDown(self, event: MouseEvent) {
    self.setState({ mouseDown: true })
    self.emit('change', self.gatherProgress(event))
    self.emit('focus')
  }

  /**
   * Removes the global mouse event state
   * when the slider is not pressed
   * 
   * @param  {Class} self The local class 
   * @param  {MouseEvent} event The mouseUp event
   * @return {null}
   */
  private handleMouseUp(self, event: MouseEvent) {
    if (self.props.steps && self.state.mouseDown === true) {
      const perc = self.gatherProgress(event)
      const value = self.props.max / self.props.steps
      const index = Math.round(perc / value)

      self.setState({ mouseDown: false })
      return this.emit('change', index * value)
    }
    self.setState({ mouseDown: false })
  }

  /**
   * Handles the mouse movement that
   * changes the slider's value by touching
   * 
   * @param {Class} self The local class 
   * @param {Touch} event The touchStart event 
   */
  private handleTouchStart(self, event: TouchEvent) {
    self.setState({ mouseDown: true })
    this.handleMouseMove(self, event)
    self.emit('focus')
  }

  /**
   * Removes the global event state
   * when the slider is not pressed by touching
   * 
   * @param {Class} self The local class 
   * @param {Touch} event The touchEnd event 
   */
  private handleTouchEnd(self, event: TouchEvent) {
    self.setState({ mouseDown: false })
    self.emit('blur')
  }

  /**
   * Handles the change of the slider's vlaue
   *
   * @param  {Class} self  The local class
   * @param  {(MouseEvent|Touch)} event The event
   * @return {null}
   */
  private handleMouseMove(self, event: MouseEvent | TouchEvent) {
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
   * @param  {Class} self The local class
   * @param  {KeyboardEvent} event The keyboardDown event
   * @return {null}
   */
  private handleKeyDown(self, event: KeyboardEvent) {
    const { value, max, steps } = self.props
    const percentage: number = !steps ? 1 : max / steps
    let _value: number

    switch(event.keyCode) {
      /** Increase the value */
      case 38:
      case 39:
        _value = vise(0, value + percentage, max)
        self.emit('change', _value)
      break

      /** Decrease the value */
      case 40:
      case 37:
        _value = vise(0, value - percentage, max)
        self.emit('change', _value)
      break
    }
  }
  
  public render({
      max, value, focused, primary, disabled, discrete, dots,
      children, onFocus, onChange, onBlur, ...props
    }, state?, context?) {

    const percentage = value / max * 100 + '%'
    const mainProps = {
      focused,
      primary,
      value,
      disabled
    }

    return (
      <Container
        innerRef={e => this.slider = e}
        tabindex={disabled ? -1 : 0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={linkEvent(this, this.handleMouseDown)}
        onKeyDown={linkEvent(this, this.handleKeyDown)}
        onTouchStart={e => this.handleTouchStart(this, e.targetTouches[0])}
        onTouchMove={e => this.handleMouseMove(this, e.targetTouches[0])}
        onTouchEnd={e => this.handleTouchEnd(this, e)}
        disabled={disabled}
        value={value}
        {...props}
      >
        <Line disabled={disabled} value={value}>
          <Track {...mainProps} style={{ width: percentage }} />
        </Line>

        <Thumb {...mainProps} style={{ left: percentage }} />
        
        {discrete
          ? <Indicator {...mainProps} value={value} style={{ left: percentage }}>
              {Math.floor(value)}
            </Indicator>
          : null
        }

        {dots ? dots : null}

        {children}
      </Container>
    )
  }
}
