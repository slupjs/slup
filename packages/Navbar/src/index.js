import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

let previousPosition = 0

export class Navbar extends Component {

  state = {
    maxHeight: 64
  }

  componentDidMount() {
    if (this.props.reveal) window.addEventListener(
      'scroll',
      this.handleScroll
    )
  }

  componentWillUnmount() {
    if (this.props.reveal) window.removeEventListener(
      'scroll',
      this.handleScroll
    )
  }

  @bind
  handleScroll(e) {
    const currentPosition = window.scrollY

    if (currentPosition < previousPosition)
      this.setState({ maxHeight: 64 })
    else
      this.setState({ maxHeight: 0 })

    previousPosition = currentPosition
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
