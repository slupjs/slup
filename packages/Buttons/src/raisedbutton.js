import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

import { Ripple } from '@slup/ripple'

export class RaisedButton extends Component {
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
    const { background, color } = this.props

    const styles = {
        position: 'relative',
        border: 'none',
        outline: 'none',
        boxShadow: boxShadow,
        background: background,
        color: color || 'rgba(255, 255, 255, .87)',
        minHeight: 36,
        minWidth: 88,
        borderRadius: '2px',
        textTransform: 'uppercase',
        fontSize: 14,
        margin: '0 8px',
        padding: '0 8px',
        cursor: 'pointer',
        transition: 'all 200ms',
        userSelect: 'none'
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
