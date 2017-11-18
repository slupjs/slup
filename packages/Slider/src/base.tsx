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
   * Handles the mouse movement that
   * changes the slider's value
   *
   * @param  {Class} this  The local class
   * @param  {MouseEvent} event The mouseDown event
   * @return {null}
   */
  private handleMouseDown(self, event: Event) {
    self.setState({ mouseDown: true })
  }

  /**
   * Stops the slider from updating its value
   */
  private handleMouseUp(self, event: Event) {
    self.setState({ mouseDown: false })
  }

  /**
   * Change the value of the slider by the current
   * mouse position and the offset of the container
   *
   * @param {MouseEvent} event The mouse position
   */
  private gatherPrgress({ clientX }) {
    const { offsetLeft, clientWidth } = this.slider
    const percentage = (clientX - offsetLeft) / clientWidth

    return vise(0, percentage, 1) * this.props.max
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

    self.emit('change', self.gatherPrgress(event))
  }

  /**
   * Renders the JSX element
   * @return {JSX Element} The basic slider element
   */
  public baseRender({
      max, value, focused, customThumb, children,
      onFocus, onChange, onBlur, ...props
    }, state?, context?) {

    const percentage = value / max * 100 + '%'
    const thumbProps = {
      focused,
      style: { left: percentage }
    }

    return(
      <Container
        innerRef={e => this.slider = e}
        tabindex={0}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={linkEvent(this, this.handleMouseDown)}
      >
        <Line>
          <Track focused={focused} style={{ width: percentage }} />
        </Line>

        {customThumb
          ? <customThumb {...thumbProps} />
          : <Thumb {...thumbProps} />
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
