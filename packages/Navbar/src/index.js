import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Navbar extends Component {

  @bind
  getStyles() {
    const { backgroundColor, color } = this.props

    const styles = {
      boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      backgroundColor: backgroundColor,
      color: color
    }

    return styles
  }

  render({ children, backgroundColor, color }) {
    const styles = this.getStyles()

    return <div style={styles}>{children}</div>
  }
}
