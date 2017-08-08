import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Ripple extends Component {
  state = {
    ripples: []
  }

  componentDidMount() {
    this.parent = this.ripple.parentElement

    const { parent, handleMouseDown } = this
    parent.addEventListener('mousedown', handleMouseDown)
  }

  componentWillUnmount() {
    const { parent, handleMouseDown } = this
    parent.removeEventListener('mousedown', handleMouseDown)
  }

  @bind
  createListener(id) {
    const { parent, startRemoval }  = this
    const { ripples } = this.state

    const handler = function() {
      ripples[id].removable = true

      // This will just work if the
      // animation has ended
      startRemoval(id)
      parent.removeEventListener('mouseup', handler)
    }

    parent.addEventListener('mouseup', handler)
  }

  @bind
  startRemoval(id) {
    const { ripples } = this.state
    const { opacityTiming } = this.props

    if(!ripples[id].animationEnded || !ripples[id].removable)
      return false

    // If we can remove it we first start
    // By decreasing the opacity to 0 and
    // Then after the animation finishes we
    // Remove the node
    const _styles = {
      ...ripples[id].styles,
      opacity: '0'
    }

    ripples[id].styles = _styles
    this.setState({ ripples })

    setTimeout(e => this.removeRipple(id), opacityTiming || 250)
  }

  @bind
  removeRipple(id) {
    const { ripples } = this.state

    ripples[id] = undefined
    this.setState({ ripples })
  }

  @bind
  animationEnded(id) {
    const { ripples } = this.state

    ripples[id].animationEnded = true
    this.setState({ ripples })

    // This will just work if the user has
    // fired the mouseup event
    this.startRemoval(id)
  }

  @bind
  startScaling(id) {
    const { ripples } = this.state
    const { scaleTiming } = this.props
    const self = this

    setTimeout(e => this.animationEnded(id), scaleTiming || 500)

    const _styles = {
      ...ripples[id].styles,
      transform: 'scale(100)'
    }

    ripples[id].styles = _styles
    setTimeout( () => self.setState({ ripples }), 1)

  }

  @bind
  createNewRipple(x, y) {
    const id               = this.state.ripples.length
    const self             = this
    const { parent }       = this
    const { rippleStyles } = this.getStyles()
    const {
      ripples,
      timeouts
    } = this.state

    const ripple = {
      animationEnded: false,
      removable: false,
      styles: {
        ...rippleStyles,
        top: y - (rippleStyles.height / 2),
        left: x - (rippleStyles.width / 2)
      }
    }

    ripples.push(ripple)
    this.setState({ ripples })

    this.createListener(id)
    this.startScaling(id)
  }

  @bind
  handleMouseDown(event) {
    event.stopPropagation()
    const { offsetX, offsetY } = event

    this.createNewRipple(offsetX, offsetY)
  }

  @bind
  getStyles() {
    const {
      startingSize,
      scaleTiming,
      opacityTiming,
      easing,
      opacity
    } = this.props

    const styles = {
      zIndex: -1,
      position: 'absolute',
      left: 0, top: 0,
      bottom: 0, right: 0,
      overflow: 'hidden',
      background: 'red',

      rippleStyles: {
        zIndex: -1,
        position: 'absolute',
        height: startingSize || 10,
        width: startingSize || 10,
        background: 'gray',
        opacity: opacity || .25,
        transition: `
          transform ${scaleTiming / 100 || .5}s,
          opacity ${opacityTiming / 100 || .25}s
        `,
        transitionTimingFunction: easing || 'ease-in-out',
        borderRadius: '50%'
      }
    }

    return styles
  }

  render() {
    const styles = this.getStyles()
    const { ripples } = this.state

    return <div ref={e => this.ripple = e} style={styles} >
      {ripples.filter(Boolean).map(({ styles }, i) => {
        return <span key={i} style={styles} />
      })}
    </div>
  }
}

window.Ripple = Ripple
