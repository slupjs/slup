import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Navbar extends Component {
  previousY = 0
  previousX = 0
  state = {
    maxHeight: 64,
    height: 56
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
  handleScroll() {
    const currentX = window.scrollX
    const currentY = window.scrollY

    // Ignore the horizontal scroll
    if(currentX !== this.previousX)
      return this.previousX = currentX

    if (currentY < this.previousY)
      this.setState({ maxHeight: 64 })
    else
      this.setState({ maxHeight: 0 })

    this.previousY = currentY
  }

  @bind
  getStyles() {
    const {
      background,
      fixed,
      reveal
    } = this.props

    const { maxHeight, height } = this.state

    const styles = {
      boxShadow: `
        0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12)
      `,
      transition: 'max-height 150ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      height: height,
      maxHeight: maxHeight,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      background: background || 'transparent',
      position: fixed || reveal ? 'fixed' : 'absolute',
      right: 0, left: 0,
      zIndex: 998
    }

    return styles
  }

  render({ children }) {
    if (window.matchMedia("(max-width: 960px)").matches)
      this.setState({ height: 56 })
    else
      this.setState({ height: 64 })
      
    const styles = this.getStyles()

    return <div style={styles}>{children}</div>
  }
}
