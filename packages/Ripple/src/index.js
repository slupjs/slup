import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

import { Wave }  from './wave'

export class Ripple extends Component {
  state = {
    ripples: [],
    width: 0,
    height: 0
  }

  componentDidMount() {
    const { width, height } = this.ripple.getBoundingClientRect()

    this.setState({ width, height })
  }

  @bind
  getRipples() {
    return this.state.ripples.filter(Boolean)
  }

  @bind
  handleMouseDown({ offsetX, offsetY }) {
    const { ripples } = this.state
    const id = ripples.length

    ripples.push({
      id: id,
      isRemovable: false,
      x: offsetX,
      y: offsetY
    })

    this.addHandler(id)

    this.setState({ ripples })
  }

  @bind
  addHandler(id) {
    const { ripples } = this.state
    const { ripple }  = this
    const self        = this

    const handler = function() {
      ripples[id].isRemovable = true

      self.setState({ ripples })
      ripple.removeEventListener('mouseup', handler, { passive: true})
    }

    ripple.addEventListener('mouseup', handler, { passive: true})
  }

  getStyles() {
    const styles = {
      position: 'absolute',
      top: 0, bottom: 0,
      left: 0, right: 0,
      overflow: 'hidden'
    }

    return styles
  }

  render({
    startingSize,
    background,
    scaleTiming,
    easing,
    opacity
  }) {

    const ripples = this.getRipples()
    const styles  = this.getStyles()
    const { width, height } = this.state

    return(
      <div
        style={styles}
        onMouseDown={this.handleMouseDown}
        ref={e => this.ripple = e}
      >
        {ripples.map(({ isRemovable, x, y, id }) => {

          return <Wave
            width={width}
            height={height}
            x={x}
            y={y}

            key={id}
            isRemovable={isRemovable}

            background={background}
            scaleTiming={scaleTiming}
            easing={easing}
            opacity={opacity}
          />

        })}
      </div>
    )
  }
}
