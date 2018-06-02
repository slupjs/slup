import { linkEvent, Component } from 'inferno'
import styled, { lightTheme, rgba } from '@slup/theming'
import { Container }  from './container'

const Box = styled.div`
  /**
  * Disables blue background on tap in mobile devices.
  * See:
  * - https://stackoverflow.com/a/29961714
  * - #32
  */
  -webkit-tap-highlight-color: transparent;

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
      : rgba(props.theme.text || lightTheme.text, .54)
  };
  background: ${props => props.disabled && props.checked
    ? props.theme.text || lightTheme.text
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : 'transparent'
  };
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    transform-origin: 0 0;
    transition: opacity 200ms linear;
    background: ${props => props.theme.background || lightTheme.background};
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    opacity: ${props => props.checked ? 1 : 0};
  }

  &::after {
    transition: transform 50ms linear;
    transform: translate(${props => props.size / 5.3}px, ${props => props.size / 2.6}px)
      rotate(44.91deg)
      ${props => props.checked ? 'scale(.4,.1)' : 'scale(.1, .1)'}
  }

  &::before {
    transition: transform 100ms linear 100ms;
    transform: translate(${props => props.size / 2.55}px, ${props => props.size / 1.65}px)
      rotate(-45deg)
      ${props => props.checked ? 'scale(.6,.1)' : 'scale(.1, .1)'}
  }

  &:hover div {
    transform: scale(3);
    opacity: .1;
  }
  
  &:focus div {
    transform: scale(3);
    opacity: .2;
  }

  &:active div {
    transform: scale(3);
    opacity: .2;
  }

  ${props => props.disabled && `
    pointer-events: none;
    opacity: .3;
  `};
`

const Wave = styled.div`
  background: red;
  position: absolute;
  left: -1px; top: -1px;
  z-index: -1;
  pointer-events: none;
  border-radius: 50%;
  transition: background 150ms linear,
    opacity 150ms linear,
    transform 200ms linear;
  transform: scale(0);
  opacity: 0;
  width: ${props => props.size - 2}px;
  height: ${props => props.size - 2}px;
  background-color: ${props => props.checked
    ? props.theme.secondary || lightTheme.secondary
    : rgba(props.theme.text || lightTheme.text, .3)
  };
`

export class Checkbox extends Component<any, any> {
  handleKeyDown(self, { keyCode }: KeyboardEvent) {
    if(keyCode === 32 && self.props.onChange && !self.props.disabled) {
      self.props.onChange()
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
          size={props.size || 18}
        >
          {!props.disabled
            ? <Wave
                checked={props.checked}
                size={props.size || 18}
              />
            : null
          }
        </Box>
      </Container>
    )
  }
}
