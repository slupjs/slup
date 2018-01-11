import Inferno, { linkEvent } from 'inferno'
import Component from 'inferno-component'
import { Container, Tip } from './container'

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
          {...props}
        >
          {props.text}
        </Tip>
      </Container>
    )
  }
}