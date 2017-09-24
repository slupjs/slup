import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

import { Wrapper } from './container'
import { Wave }    from './wave'

export class Ripple extends Component {
  state = { ripples: [] }

  @bind
  handleMouseDown({ offsetX, offsetY }) {
    const { ripples } = this.state
    const id          = ripples.length


    ripples.push({
      id: id,
      isRemovable: false,
      x: offsetX,
      y: offsetY
    })

    // Await for the mouseUp event to remove the ripple
    this.addHandler(id)

    // Render the new ripple
    this.setState({ ripples })

    // Fire off the animation! 🚀
    this.fire(id)
  }

  @bind
  onEnded(id) {
    const { ripples } = this.state
    ripples[id].ended = true

    this.setState({ ripples })

    setTimeout(e => this.onFaded(id), 250)
  }

  @bind
  onFaded(id) {
    const { ripples } = this.state
    ripples[id].faded = true

    this.setState({ ripples })
  }

  @bind
  fire(id) {
    const { ripples } = this.state

    /**
     * Calculating the scale of the ripple:
     * - get width and height of the container
     * - divide by the starting size of the ripple
     */
    const { width, height } = this.ripple.getBoundingClientRect()

    // The heighest value of the two(height, width)
    const heighest = width > height ? width : height

    ripples[id].scale = heighest / 4.5

    this.setState({ ripples })

    setTimeout(e => this.onEnded(id), 600)
  }

  @bind
  addHandler(id) {
    const { ripples } = this.state

    const handler = () => {
      ripples[id].isRemovable = true

      // Update ripples
      this.setState({ ripples })

      // Remove the ended event
      window.removeEventListener('mouseup', handler, { passive: true })
    }

    // Wait for the event
    window.addEventListener('mouseup', handler, { passive: true })
  }

  render() {
    return(
      <Wrapper 
        innerRef={element => this.ripple = element}
        onMouseDown={this.handleMouseDown}
      >
        {this.state.ripples.map(props =>
          props.isRemovable && props.ended && props.faded
            ? null
            : <Wave {...props} />
        )}
      </Wrapper>
    )
  }
}