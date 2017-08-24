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

  &:focus {
    /* Just a temporary shadow */
    transition: box-shadow 200ms linear;
    box-shadow: 0 0 0 15px #9e9e9e;
  }
`

export class Checkbox extends Component {

  @bind
  handleKeyDown({ keyCode }) {
    if(keyCode == 32 && this.props.onChange && !this.props.disabled) {
      this.props.onChange()
    }
  }

  render(props) {
    return ( <Box {...props}
      onClick={props.onChange}
      tabIndex={0}
      onKeyDown={this.handleKeyDown} />
    )
  }
}
