import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

import { Ripple } from '@slup/ripple'

export class Fab extends Component {
    state = {
      boxShadow: `
        0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12)
      `
    }

  @bind
  getStyles() {
    const { boxShadow } = this.state
    const {
      background,
      mini,
      color
    } = this.props

    const styles = {
      position: 'fixed',
      border: 'none',
      outline: 'none',
      background: background,
      fill: color || 'rgba(255, 255, 255, .87)',
      color: color || 'rgba(255, 255, 255, .87)',
      boxShadow: boxShadow,
      height: mini ? 40 : 56,
      width: mini ? 40 : 56,
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'box-shadow 200ms',
      userSelect: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    return styles
  }

  @bind
  handleMouseDown() {
    this.setState({
      boxShadow: `
        0px 5px 5px -3px rgba(0, 0, 0, 0.2),
        0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12)
        `
    })
  }

  @bind
  handleMouseUp() {
    this.setState({
      boxShadow: `
        0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12)
      `
    })
  }

  render({ children, ripple, rippleOptions }) {
    const styles = this.getStyles()

    return(
      <button
        style={styles}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        {...this.props}
      >
        {children}
        {ripple == false
          ? null
          : <Ripple {...rippleOptions} />
        }
      </button>
    )
  }
}
