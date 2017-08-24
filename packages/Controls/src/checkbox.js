import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

const Box = styled.div`
  width: ${props => props.size || 18}px;
  height: ${props => props.size || 18}px;
  border-radius: 2px;
  box-sizing: border-box;
  border: 2px solid ${props => props.disabled ? '#9e9e9e'
    : props.checked ? 'teal'
    : '#616161'};
  background-color: ${props => props.disabled && props.checked ? '#9e9e9e'
    : props.checked ? 'teal'
    : 'transparent'};
  transition: background-color 300ms cubic-bezier(0.4, 0.0, 0.2, 1),
    border-color 200ms linear;
  outline: none;
  position: relative;
  cursor: ${props => props.disabled
    ? 'not-allowed'
    : 'pointer'
  };
  pointer-events: ${props => props.disabled
    ? 'none'
    : 'auto'
  };

  &::before,
  &::after {
    content: '';
    background: #fff;
    height: ${props => props.size || 18}px;
    width: ${props => props.size || 18}px;
    position: absolute;
    top: -2px;
    left: -2px;
    opacity: ${props => props.checked ? '1' : '0'};
    transform-origin: 0 0;
    transition: opacity 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  &::after {
    transition: transform 50ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: translate(${props => props.size / 5.3 || 3.5}px, ${props => props.size / 2.6 || 7.2}px)
      rotate(44.91deg)
      ${props => props.checked ? 'scale(.4,.1)' : 'scale(.1, .1)'}
  }

  &::before {
    transition: transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: translate(${props => props.size / 2.55 || 7.1}px, ${props => props.size / 1.65 || 11.2}px)
      rotate(-45deg)
      ${props => props.checked ? 'scale(.6,.1)' : 'scale(.1, .1)'}
  }
`

const Wave = styled.div`
  width: ${props => (props.size || 18) - 2}px;
  height: ${props => (props.size || 18) - 2}px;
  background: red;
  position: absolute;
  left: -1.5px; top: -1.5px;
  z-index: -1;
  pointer-events: none;
  border-radius: 50%;
  transition: background 150ms linear,
    opacity 150ms linear,
    transform 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  background-color: ${props => props.disabled
    ? 'grey'
    : props.checked
      ? 'teal'
      : 'grey'};
`

export class Checkbox extends Component {
  state = {
    transform: 'scale(0)',
    opacity: '0.25'
  }

  @bind
  createWave() {
    this.setState({
      transform: 'scale(3)',
      opacity: '0.25'
    })
  }

  @bind
  destroyWave() {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    }, 150)
  }

  @bind
  handleMouseDown() {
    this.createWave()
  }

  @bind
  handleMouseUp() {
    this.destroyWave()
  }

  @bind
  handleFocus() {
    this.createWave()
  }

  @bind
  handleBlur() {
    this.destroyWave()
  }

  @bind
  handleKeyDown({ keyCode }) {
    if(keyCode == 32 && this.props.onChange && !this.props.disabled) {
      this.props.onChange()
    }
  }

  render(props) {
    return (
      <Box {...props}
      onClick={props.onChange}
      tabIndex={0}
      onKeyDown={this.handleKeyDown}
      onMouseDown={this.handleMouseDown}
      onMouseUp={this.handleMouseUp}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}>
        <Wave
          checked={props.checked}
          disabled={props.disabled}
          size={props.size}
          transform={this.state.transform}
          opacity={this.state.opacity}
        />
      </Box>
    )
  }
}
