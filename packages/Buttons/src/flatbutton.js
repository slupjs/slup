import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

import { Ripple } from '@slup/ripple'

export class FlatButton extends Component {
  state = {
    background: this.props.background || 'transparent'
  }

  @bind
  getStyles() {
    const { color } = this.props
    const { background } = this.state

    const styles = {
      position: 'relative',
      border: 'none',
      outline: 'none',
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
  handleMouseEnter() {
    const { hover } = this.props
    const background = hover || '#9e9e9e'

    this.setState({ background })
  }

  @bind
  handleMouseLeave() {
    const { background: _background } = this.props
    const background = _background || 'transparent'

    this.setState({ background })
  }

  render({ children, ripple, rippleOptions }) {
    const styles = this.getStyles()

    return(
      <button
        style={styles}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
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
