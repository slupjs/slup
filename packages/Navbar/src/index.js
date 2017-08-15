import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Navbar extends Component {

  state = {
    maxHeight: 64
  }

  componentDidMount() {
    if (this.props.reveal) {
      window.addEventListener('wheel', this.handleWheel)
    }
  }

  componentWillUnmount() {
    if (this.props.reveal) {
      window.addEventListener('wheel', this.handleWheel)
    }
  }

  @bind
  handleWheel(e) {
    let delta

    if (e.wheelDelta) {
      delta = e.wheelDelta
    } else {
      delta = -1 * e.deltaY
    }

    if (delta < 0) {
      this.setState({
        maxHeight: 0
      })

    } else {
      this.setState({
        maxHeight: 64
      })
    }
  }

  @bind
  getStyles() {
    const {
      background,
      color,
      fixed,
      reveal
    } = this.props

    const { maxHeight } = this.state

    const styles = {
      boxShadow: `
        0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12)
      `,
      transition: 'max-height 150ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      height: 64,
      maxHeight,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      background: background || 'transparent',
      color: color || '#FFFFFF',
      position: fixed || reveal ? 'fixed' : 'absolute',
      right: 0, left: 0,
      zIndex: 998
    }

    return styles
  }

  render({ children }) {
    const styles = this.getStyles()

    return <div style={styles}>{children}</div>
  }
}
