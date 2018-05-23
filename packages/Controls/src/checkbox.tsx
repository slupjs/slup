import { linkEvent, Component } from 'inferno'
import styled, { lightTheme, rgba } from '@slup/theming'
import { Container }  from './container'

const Box = styled.div`
  border-radius: 2px;
  box-sizing: border-box;
  transition: background 300ms cubic-bezier(0.4, 0.0, 0.2, 1),
    border-color 200ms linear;
  outline: none;
  position: relative;
  opacity: ${props => props.disabled ? .3 : 1};
  width: ${props => props.size || 18}px;
  height: ${props => props.size || 18}px;
  border: 2px solid ${props => props.disabled
    ? props.theme.text || lightTheme.text
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : rgba(props.theme.text || lightTheme.text, .7)
  };
  background: ${props => props.disabled && props.checked
    ? props.theme.text || lightTheme.text
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : 'transparent'
  };
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
    position: absolute;
    top: -2px;
    left: -2px;
    transform-origin: 0 0;
    transition: opacity 200ms linear;
    background: ${props => props.theme.background || lightTheme.background};
    height: ${props => props.size || 18}px;
    width: ${props => props.size || 18}px;
    opacity: ${props => props.checked ? 1 : 0};
  }

  &::after {
    transition: transform 50ms linear;
    transform: translate(${props => props.size / 5.3 || 3.5}px, ${props => props.size / 2.6 || 7.2}px)
      rotate(44.91deg)
      ${props => props.checked ? 'scale(.4,.1)' : 'scale(.1, .1)'}
  }

  &::before {
    transition: transform 200ms linear;
    transform: translate(${props => props.size / 2.55 || 7.1}px, ${props => props.size / 1.65 || 11.2}px)
      rotate(-45deg)
      ${props => props.checked ? 'scale(.6,.1)' : 'scale(.1, .1)'}
  }
`

const Wave = styled.div`
  background: red;
  position: absolute;
  left: -1.5px; top: -1.5px;
  z-index: -1;
  pointer-events: none;
  border-radius: 50%;
  transition: background 150ms linear,
    opacity 150ms linear,
    transform 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
  width: ${props => (props.size || 18) - 2}px;
  height: ${props => (props.size || 18) - 2}px;
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  background-color: ${props => props.disabled
    ? 'grey'
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : 'grey'};
`

export class Checkbox extends Component<any, any> {
  state = {
    transform: 'scale(0)',
    opacity: '0.2'
  }

  createWave(this) {
    this.setState({
      transform: 'scale(3)',
      opacity: '0.2'
    })
  }

  destroyWave(this) {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    }, 150)
  }

  handleKeyDown(this, { keyCode }) {
    if(keyCode == 32 && this.props.onChange && !this.props.disabled) {
      this.props.onChange()
    }
  }

  render(props) {
    return (
      <Container {...props}>
        <Box
          {...props}
          onClick={props.onChange}
          tabIndex={0}
          onKeyDown={linkEvent(this, this.handleKeyDown)}
          onMouseDown={linkEvent(this, this.createWave)}
          onMouseUp={linkEvent(this, this.destroyWave)}
          onFocus={linkEvent(this, this.createWave)}
          onBlur={linkEvent(this, this.destroyWave)}
        >
          <Wave
            {...props}
            transform={this.state.transform}
            opacity={this.state.opacity}
          />
        </Box>
      </Container>
    )
  }
}
