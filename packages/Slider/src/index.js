import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Slider extends Component {
  state = {
    focus: false,
    keyFocus: false,
    progress: 40
  }

  vise = (min, value, max) =>
    Math.min(Math.max(min, value), max)

  @bind
  moveSlider({ clientX }) {
    const { offsetLeft, clientWidth } = this.slider
    const percentage = (clientX - offsetLeft) / clientWidth
    const progress = this.vise(0, percentage, 1) * 100

    this.setState({ progress })
  }

  @bind
  handleMouseDown(e) {
    this.setState({ focus: true })

    this.moveSlider(e)
  }

  @bind
  handleMouseUp(e) {
    this.setState({ focus: false })
  }

  @bind
  handleMouseMove(e) {
    if(!this.state.focus) return

    this.moveSlider(e)
  }

  @bind
  handleKeyDown({ keyCode }) {
    let { keyFocus, progress } = this.state

    switch (keyCode) {

      // Enter: Focs/unfocus
      case 13:
        this.setState({ keyFocus: !keyFocus })
      break

      // Forward: increment of 1
      case 39:
        if(keyFocus && progress != 100)
          this.setState({ progress: progress+1 })
      break

      // Backwards: decrease of 1
      case 37:
        if(keyFocus && progress != 0)
          this.setState({ progress: progress-1 })
      break
      default:
      break
    }
  }

  @bind
  getStyles() {
    const { progress, keyFocus, focus } = this.state

    const styles = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      height: 3,
      margin: 16,
      width: '100%',
      background: 'rgba(0, 0, 0, .2)',

      track: {
    		position: 'absolute',
    		height: 3,
        width: progress + '%',
    		background: '#2196F3'
      },

    	thumb: {
    		position: 'absolute',
    		height: 14,
    		width: 14,
        left: progress + '%',
        marginLeft: -7,
    		background: '#2196F3',
    		borderRadius: '50%'
      },

      ring: {
    		position: 'absolute',
    		height: 28,
    		width: 28,
        left: progress + '%',
        marginLeft: -14,
    		background: focus || keyFocus
          ? 'rgba(0, 0, 0, .1)'
          : 'transparent',
        transition: 'background .35s',
    		borderRadius: '50%'
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
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
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
