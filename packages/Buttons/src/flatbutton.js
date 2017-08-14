import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class FlatButton extends Component {
    state = {
      background: 'transparent'
    }

  @bind
  getStyles() {
    const { color, backgroundColor } = this.props

    const styles = {
        position: 'relative',
        border: 'none',
        outline: 'none',
        background: backgroundColor || this.state.background,
        color: 'rgba(255, 255, 255, .87)',
        minHeight: 36,
        minWidth: 88,
        borderRadius: '2px',
        textTransform: 'uppercase',
        fontSize: 14,
        margin: '0 8px',
        padding: '0 8px',
        cursor: 'pointer',
        transition: 'all 200ms',
        userSelect: 'none',
        color: color || 'rgba(255, 255, 255, .87)'
    }

    return styles
  }

  @bind
  handleMouseEnter() {
    const { hoverColor } = this.props

    this.setState({
      background: hoverColor || '#9e9e9e'
    })
  }

  @bind
  handleMouseLeave() {
    const { backgroundColor } = this.props

    this.setState({
      background: 'transparent'
    })
  }

  render({ hoverColor, color, backgroundColor, text }) {
    const styles = this.getStyles()

    return(
      <button
        style={styles}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>{this.props.text}</button>
    )
  }
}
