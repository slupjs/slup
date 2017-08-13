import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Slider extends Component {
  state = {
    focus: false,
    keyFocus: false,
  }

  // Helper functions
  vise = (min, value, max) =>
    Math.min(Math.max(min, value), max)

  capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

  componentWillMount() {
    document.addEventListener(
      'mousemove',
      this.handleMouseMove,
      { passive: true }
    )
    document.addEventListener(
      'mouseup',
      this.handleMouseUp,
      { passive: true }
    )
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousemove',
      this.handleMouseMove,
      { passive: true }
    )
    document.removeEventListener(
      'mouseup',
      this.handleMouseUp,
      { passive: true }
    )
  }


  @bind
  moveSlider({ clientX }) {
    const { offsetLeft, clientWidth } = this.slider
    const percentage = (clientX - offsetLeft) / clientWidth
    const progress = this.vise(0, percentage, 1) * 100

    this.emit('change', progress)
  }

  emit(type, value) {
    const eventName = 'on' + this.capitalize(type)
    if(typeof this.props[eventName] == 'function') {
      this.props[eventName](value)
    }
  }

  @bind
  handleMouseDown(e) {
    // Set the state and emit the focus event
    this.setState({ focus: true })
    this.emit('focus')

    this.moveSlider(e)
  }

  @bind
  handleMouseUp(e) {
    // Set the state and emit the blur event
    this.setState({ focus: false })
    this.emit('blur')
  }

  @bind
  handleMouseMove(e) {
    if(!this.state.focus) return

    this.moveSlider(e)
  }

  @bind
  handleKeyDown({ keyCode }) {
    const { vise } = this
    let { value } = this.props
    let { keyFocus } = this.state

    switch (keyCode) {

      // Enter: Focs/unfocus
      case 13:
        this.setState({ keyFocus: !keyFocus })
        this.emit('focus')
      break

      // Forward: increment of 1
      case 38:
      case 39:
        if(keyFocus) {
          const _value = vise(0, value + 1, 100)
          this.emit('change', _value)
        }
      break

      // Backwards: decrease of 1
      case 40:
      case 37:
        if(keyFocus) {
          const _value = vise(0, value - 1, 100)
          this.emit('change', _value)
        }
      break
      default:
      break
    }
  }

  @bind
  getStyles() {
    const { keyFocus, focus } = this.state

    // Take values for both the customization
    // and the calculation of the progress value
    const {
      value,
      max,
      background,
      color
    } = this.props

    const progress = (value / max) * 100

    const styles = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      height: 3,
      margin: 16,
      width: '100%',
      background: `rgba(${background || '0, 0, 0'}, .2)`,

      track: {
        position: 'absolute',
        height: 3,
        width: progress + '%',
        background: color || '#2196F3'
      },

      thumb: {
        position: 'absolute',
        height: 14,
        width: 14,
        left: progress + '%',
        marginLeft: -7,
        borderRadius: '50%',
        background: color || '#2196F3'
      },

      ring: {
        position: 'absolute',
        height: 28,
        width: 28,
        left: progress + '%',
        marginLeft: -14,
        transition: 'background .35s',
        borderRadius: '50%',
        background: focus || keyFocus
          ? 'rgba(0, 0, 0, .1)'
          : 'transparent'
      }
    }

    return styles
  }

  render() {
    const styles = this.getStyles()
    const {
      handleMouseDown,
      handleMouseUp,
      handleMouseMove,
      handleKeyDown
    } = this

    return(
      <div
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        ref={e => this.slider = e}
        tabIndex={0}
        style={styles}
      >
        {/* Thumb */}
        <div style={styles.thumb} />

        {/* Track */}
        <div style={styles.track} />

        {/* Ring */}
        <div style={styles.ring} />
      </div>
    )
  }
}
