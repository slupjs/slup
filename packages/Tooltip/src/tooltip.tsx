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
  private tooltip: HTMLDivElement
  
  public constructor() {
    super()
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.state = { focused: false }
  }

  public componentDidMount() {
    this.tooltip.firstChild.addEventListener('focus', this.handleFocus)
    this.tooltip.firstChild.addEventListener('blur', this.handleBlur)
  }

  public componentWillUnmount() {
    this.tooltip.firstChild.removeEventListener('focus', this.handleFocus)
    this.tooltip.firstChild.removeEventListener('blur', this.handleBlur)
  }

  /**
   * Handles the focus of the tooltip
   * 
   * @param   {Class} this The local class
   * @returns {null}
   */
  private handleFocus(this) {
    this.setState({ focused: true })
  }

  /**
   * Handles the blur of the tooltip
   * 
   * @param   {Class} this The local class
   * @returns {null}
   */
  private handleBlur(this) {
    this.setState({ focused: false })
  }

  render(props) {
    return(
      <Container
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseOver={this.handleFocus}
        onMouseOut={this.handleBlur}
        onTouchStart={this.handleFocus}
        onTouchEnd={this.handleBlur}
        innerRef={e => this.tooltip = e}
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