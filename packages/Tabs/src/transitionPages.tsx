import { EASING } from '@slup/common'
import { linkEvent, Component } from 'inferno'
import styled from '@slup/theming'

const Scroll = styled.div`
  overflow-x: hidden;
  height: 100%;
`

export const Pages = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  transition: transform 300ms ${EASING['standard']};
  transform: ${props => `translateX(-${props.selected * 100}%)`};
`

export const Page = styled.div`
  flex-shrink: 0;
  width: 100%;
`

interface IProps {
  selected: number
  onSwipe: (index: number) => void
}

interface IState {
  touched: boolean
  startX: number
  translate: number
}

export class TransitionPages extends Component<IProps, IState> {
  private container: HTMLDivElement

  public state: IState = {
    touched: false,
    startX: 0,
    translate: 0
  }

  public componentWillReceiveProps(nextProps: IProps) {
    const stateSelection = Math.round(this.state.translate / 100)
    const DID_PROP_CHANGE = this.props.selected !== nextProps.selected

    if(nextProps.selected !== stateSelection && DID_PROP_CHANGE) {
      this.setState({ translate: nextProps.selected * 100 })
      this.emitSwipe(nextProps.selected)
    }
  }

  /**
   * Emit the new selected index to a possible onSwipe listener
   * 
   * @param index the new index
   */
  private emitSwipe(index: number) {
    if(this.props.onSwipe && typeof this.props.onSwipe === 'function') {
      this.props.onSwipe(index)
    }
  }

  /**
   * Saves the latest touch on the x axis
   * 
   * @param self The local class
   * @param event The data from the fired event
   */
  private handleTouchStart(self: this, { targetTouches }: TouchEvent) {
    const { translate } = self.state
    const { clientX } = targetTouches[0]
    const { clientWidth } = self.container
    
    const increment = (translate * clientWidth) / 100
    
    self.setState({
      touched: true,
      startX: clientX + increment
    })
  }

  /**
   * Creates a percentage to move the container
   * using the current touch and the saved one
   * on the x axis
   * 
   * @param self The local class
   * @param event The data from the fired event
   */
  private handleTouchMove(self: this, { targetTouches }: TouchEvent) {
    const { startX } = self.state
    const { clientX } = targetTouches[0]
    const { clientWidth } = self.container
    const childrenCount = self.container.children[0].children.length
    
    let percentage = ((startX - clientX) / clientWidth) * 100

    if (percentage < 0)
      percentage = 0
    else if (percentage > ((childrenCount - 1) * 100))
      percentage = (childrenCount - 1) * 100
    
    self.setState({ translate: percentage })
  }

  /**
   * Rounds the percentage
   * 
   * @param self The local class
   */
  private handleTouchEnd(self: this) {
    self.setState({
      touched: false,
      translate: Math.round(self.state.translate / 100) * 100
    })

    self.emitSwipe(Math.round(self.state.translate / 100))
  }

  public render(props, { translate, touched }) {
    return(
      <Scroll
        {...props}
        innerRef={e => this.container = e}
        onTouchStart={linkEvent(this, this.handleTouchStart)}
        onTouchMove={linkEvent(this, this.handleTouchMove)}
        onTouchEnd={linkEvent(this, this.handleTouchEnd)}
      >
        <Pages
          selected={props.selected}
          touched={touched}
          style={`transform: translateX(-${translate}%)`}
        >
          {props.children}  
        </Pages>
      </Scroll>
    )
  }
}