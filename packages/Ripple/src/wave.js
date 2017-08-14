import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Wave extends Component {
  state = {
    transform: '',
    ended: false
  }

  componentDidMount() {
    const {
      scaleTiming,
      scaleSize,
      width,
      height
    } = this.props

    const heighest = width > height ? width : height

    setTimeout(() => {
      this.setState({ transform: `scale(${heighest / 5})` })
    })

    setTimeout(() => {
      this.setState({ ended: true })
    }, scaleTiming || 600)
  }

  getStyles() {
    const {
      background,
      scaleTiming,
      easing,
      opacity,
      height,
      width,
      x, y
    } = this.props

    const { transform } = this.state

    const heighest = width > height ? width : height

    const styles = {
      position: 'absolute',
      top: y - 5,
      left: x - 5,
      pointerEvents: 'none',
      height: 10,
      width: 10,
      background: background || '#EEEEEE',
      opacity: opacity || .45,
      transition: `transform ${scaleTiming || .9}s`,
      transform: transform,
      transitionTimingFunction: easing || 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      borderRadius: '50%',
    }

    return styles
  }

  render({ isRemovable }) {
    const styles    = this.getStyles()
    const { ended } = this.state

    return isRemovable && ended
    ? null
    : <div style={styles} />
  }
}
