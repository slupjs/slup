import Inferno, { linkEvent } from 'inferno'
import Component from 'inferno-component'
import { Container, Tip } from './container'

interface IProps {
  text: string,
  delay: string,
  location: string
}

interface IState {
  focused: boolean
}

export class Tooltip extends Component<IProps, IState> {
  public state = { focused: false }

  /**
   * Handles the focus of the tooltip
   * 
   * @param   {Class} self The local class
   * @returns {null}
   */
  private handleFocus(self) {
    self.setState({ focused: true })
  }

  /**
   * Handles the blur of the tooltip
   * 
   * @param   {Class} self The local class
   * @returns {null}
   */
  private handleBlur(self) {
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