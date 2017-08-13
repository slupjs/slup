import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'


export class Indicator extends Component {
  getStyles() {
    const {
      value,
      max,
      color,
      background,
      focus
    } = this.props

    const progress = (value / max) * 100

    const styles = {
      position: 'absolute',
      left: progress + '%',
      bottom: 14,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: background || '#2196F3',
      color: color || 'rgba(255, 255, 255, .87)',
      borderRadius: '48.8%',
      textTransform: 'uppercase',
      fontSize: 12,
      transition: 'transform .3s cubic-bezier(0.4, 0.0, 0.2, 1)',
      userSelect: 'none',
      height: 32,
      width: 32,
      transformOrigin: 'bottom',
      transform: `translateX(-50%) ${focus ? 'scale(1, 1)' : 'scale(0, 0)'}`,
      triangle: {
        position: 'absolute',
        bottom: -7,
        width: 0,
        height: 0,
        borderLeft: '12px solid transparent',
        borderRight: '12px solid transparent',
        borderTop: `12px solid ${background || '#2196F3'}`,
      }
    }

    return styles
  }

  render({ value, max }) {
    const styles = this.getStyles.bind(this)()

    return(
      <div
        style={styles}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <span>{Math.floor((value / max) * 100)}</span>
        <div style={styles.triangle}></div>
      </div>
    )
  }
}
