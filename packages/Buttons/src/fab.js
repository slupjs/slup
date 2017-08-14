import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

export class Fab extends Component {
    state = {
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
    }

  @bind
  getStyles() {
    const { boxShadow } = this.state
    const { backgroundColor, mini } = this.props

    const styles = {
      position: 'fixed',
      border: 'none',
      outline: 'none',
      background: backgroundColor,
      height: mini ? 40 : 56,
      width: mini ? 40 : 56,
      borderRadius: '50%',
      cursor: 'pointer',
      boxShadow,
      transition: 'all 200ms',
      userSelect: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fill: 'rgba(255, 255, 255, .87)'
    }

    return styles
  }

  @bind
  handleMouseDown() {
    this.setState({
      boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'
    })
  }

  @bind
  handleMouseUp() {
    this.setState({
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'
    })
  }

  render({ backgroundColor, mini }) {
    const styles = this.getStyles()

    return(
      <button
        style={styles}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
    )
  }
}
