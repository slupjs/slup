import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled from '@slup/theming'

import { Indicator } from './indicator'
import { Dots, Dot } from './steps'
import {
  Container,
  Line,
  Thumb,
  Track
} from './parts'

export class Slider extends Component<any, any> {
  private slider = null
  public state = {
    focus: false,
    keyFocus: false,
  }

  // Helper functions
  vise = (min, value, max) =>
    Math.min(Math.max(min, value), max)

  capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

  getPercentage = (max) => max / (this.props.steps || this.props.max)

  split = (max, parts) => max / parts

  componentWillMount() {
    document.body.addEventListener('mousemove', this.handleMouseMove.bind(this))
    document.body.addEventListener('mouseup', this.handleMouseUp.bind(this))
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.handleMouseMove.bind(this))
    document.body.removeEventListener('mouseup', this.handleMouseUp.bind(this))
  }

  progressFromEvent({ clientX }) {
    const { offsetLeft, clientWidth } = this.slider
    const { max } = this.props
    const percentage = (clientX - offsetLeft) / clientWidth

    return this.vise(0, percentage, 1) * max

  }

  emit(type: string, value?: any) {
    const eventName = 'on' + this.capitalize(type)
    if(typeof this.props[eventName] == 'function') {
      this.props[eventName](value)
    }
  }

  handleMouseDown(e) {
    // Set the state and emit the focus event
    this.setState({ focus: true })
    this.emit('focus')

    this.handleMouseMove(e)
  }

  handleMouseUp(e) {
    // Set the state and emit the blur event
    this.setState({ focus: false })
    this.emit('blur')
  }

  handleMouseMove(e) {
    /** Ignore moves when unfocused */
    if (!this.state.focus) return

    if (this.props.steps && this.props.discrete) {
      const perc = this.progressFromEvent.bind(this)(e)
      const spl  = this.split(this.props.max, this.props.steps)
      const index = Math.round(perc / spl)


      this.emit('change', index * spl)
    }

    else this.emit('change', this.progressFromEvent.bind(this)(e))
  }

  handleFocus() {
    this.setState({ keyFocus: true })
  }

  handleKeyDown({ keyCode }) {
    const { vise } = this
    let { value, max } = this.props
    let { keyFocus } = this.state

    const percentage = this.getPercentage(max)

    switch (keyCode) {

      // Forward: increment of 1
      case 38:
      case 39:
        if(keyFocus) {
          const _value = vise(0, value + percentage, max)
          this.emit('change', _value)
        }
      break

      // Backwards: decrease of 1
      case 40:
      case 37:
        if(keyFocus) {
          const _value = vise(0, value - percentage, max)
          this.emit('change', _value)
        }
      break
      default:
      break
    }
  }

  render({ steps, ...props}) {
    const {
      handleMouseDown,
      handleMouseUp,
      handleMouseMove,
      handleKeyDown,
      handleFocus
    } = this
    const { focus, keyFocus } = this.state
    const dots = []

    if(steps) {
      const stepValue = this.split(props.max, steps)

      for (let i = 0; i < steps; i++) {
        dots.push(<Dot style={{ left: stepValue * i + '%'  }} id={i} />)
      }
    }

    return(
      <Container
        {...props}
        onMouseDown={handleMouseDown.bind(this)}
        onKeyDown={handleKeyDown.bind(this)}
        onFocus={handleFocus.bind(this)}
        innerRef={e => this.slider = e}
        tabIndex={props.disabled ? -1 : 0}
        focus={focus}
      >

        {/* Thumb */}
        <Thumb
          {...props}
          focus={focus}
          style={{left: (props.value / props.max) * 100 + '%'}}
        />

        {/** Dots for stepped slider */}
        {steps && props.discrete &&
          <Dots {...props}>
            {dots}
            <Dot style='left: 100%' />
          </Dots>
        }

        {/*Main Line*/}
        <Line disabled={props.disabled} />

        {/* Track */}
        <Track
          disabled={props.disabled}
          style={{width: (props.value / props.max) * 100 + '%'}}
        />


        <Indicator {...props} focus={focus || keyFocus} />
      </Container>
    )
  }
}
