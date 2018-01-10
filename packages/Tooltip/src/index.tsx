import Inferno, { linkEvent } from 'inferno'
import Component from 'inferno-component'
import styled from '@slup/theming'
import { GREY } from '@slup/theming'

const Container = styled.div`
  position: relative;
  outline: none;
`

const Tip = styled.div`
  border-radius: 2px;
  z-index: 997;
  pointer-events: none;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  color: white;
  background: ${GREY[700]};
  padding: 0 8px;
  position: absolute;
  margin-top: 14px;
  left: 50%;
  transition: opacity 150ms, transform 150ms
    ${props => props.focused
    ? 'cubic-bezier(0.0, 0.0, 0.2, 1)' // Entrance with deceleration curve
    : 'cubic-bezier(0.4, 0.0, 1, 1)'   // Exit with the acceleration curve
  };
  transition-delay: ${props => props.delay};
  opacity: ${props => props.focused ? 0.9 : 0};
  transform: 
    translateX(-50%)
    scale(${props => props.focused ? 1 : 0});
  transform-origin: center top;

  @media all and (max-width: 600px) {
    font-size: 14px;
    height: 32px;
    padding: 0 16px;
    margin-top: 24px;
  }
`

export class Tooltip extends Component<any, any> {
  state = { focused: false }

  handleFocus(self) {
    self.setState({ focused: true })
  }

  handleBlur(self) {
    self.setState({ focused: false })
  }

  render(props) {
    return(
      <Container
        tabIndex={0}
        onFocus={linkEvent(this, this.handleFocus)}
        onBlur={linkEvent(this, this.handleBlur)}
        onMouseOver={linkEvent(this, this.handleFocus)}
        onMouseOut={linkEvent(this, this.handleBlur)}
        onTouchStart={linkEvent(this, this.handleFocus)}
        onTouchEnd={linkEvent(this, this.handleBlur)}
      >
        {props.children}
        <Tip
          focused={this.state.focused}
          delay={props.delay}
        >
          {props.text}
        </Tip>
      </Container>
    )
  }
}