import Inferno, { linkEvent } from 'inferno'
import Component              from 'inferno-component'

import { Wrapper } from './container'
import { Wave }    from './wave'

export class Ripple extends Component<any, any> {
  ripple: any
  state = { ripples: [] }

  constructor() {
    super()

    this.addHandler = this.addHandler.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.onEnded = this.onEnded.bind(this)
    this.onFaded = this.onFaded.bind(this)
    this.fire = this.fire.bind(this)
  }

  handleMouseDown(self, { offsetX, offsetY }) {
    const { ripples } = self.state
    const id          = ripples.length

    ripples.push({
      id: id,
      isRemovable: false,
      x: offsetX,
      y: offsetY
    })

    // Await for the mouseUp event to remove the ripple
    self.addHandler(id)

    // Render the new ripple
    self.setState({ ripples })

    // Fire off the animation! 🚀
    self.fire(id)
  }

  onEnded(id) {
    const { ripples } = this.state
    ripples[id].ended = true

    this.setState({ ripples })

    setTimeout(e => this.onFaded(id), 250)
  }

  onFaded(id) {
    const { ripples } = this.state
    ripples[id].faded = true

    this.setState({ ripples })
  }

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

  addHandler(id) {
    const { ripples } = this.state

    const handler = () => {
      ripples[id].isRemovable = true

      // Update ripples
      this.setState({ ripples })

      // Remove the ended event
      window.removeEventListener('mouseup', handler)
    }

    // Wait for the event
    window.addEventListener('mouseup', handler)
  }

  render({ startX, startY, ..._props}) {
    return(
      <Wrapper 
        innerRef={element => this.ripple = element}
        onMouseDown={linkEvent(this, this.handleMouseDown)}
      >
        {this.state.ripples.map(props =>
          props.isRemovable && props.ended && props.faded
            ? null
            : <Wave 
              {..._props}
              {...props}

              x={startX || props.x}
              y={startY || props.y}
            />
        )}
      </Wrapper>
    )
  }
}