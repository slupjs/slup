import { linkEvent, Component } from 'inferno'
import { vise } from '@slup/common'
import { Drawer, Overlay } from './drawer'

interface IProps {
  opened: boolean
  responsive?: boolean
  permanent?: boolean
  right?: boolean
  onClose?: any
}

interface IState {
  touched: boolean
  startX: number
  translate: number
  opacity: number
  viewWidth: number
}

export class Sidenav extends Component<IProps, IState> {
  private container: HTMLDivElement

  state = {
    touched: false,
    startX: 0,
    translate: 0,
    opacity: 1,
    viewWidth: 0
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this))
    
    this.setState({ viewWidth: this.container.clientWidth })
    window.addEventListener('resize', this.setViewWidth.bind(this))
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown.bind(this))

    this.setState({ viewWidth: 0 })
    window.removeEventListener('resize', this.setViewWidth.bind(this))
  }

  private setViewWidth() {
    this.setState({ viewWidth: this.container.clientWidth })
    console.log(this.state.viewWidth)
  }

  private handleKeyDown({ keyCode }: KeyboardEvent) {
    if(this.props.opened && keyCode === 27) {
      /** Normal event listener */
      if(typeof this.props.onClose === 'function') this.props.onClose()
      
      /** Inferno's linkEvent function */
      if(typeof this.props.onClose === 'object') {
        this.props.onClose.event(this.props.onClose.data)
      }
    }
  }

  private handleTouchStart(self, { targetTouches }: TouchEvent) {
    self.setState({ startX: targetTouches[0].clientX })
  }

  private handleTouchMove(self, { targetTouches }: TouchEvent) {
    const { startX } = self.state
    const { clientX } = targetTouches[0]
    const { clientWidth } = self.container

    const percentage = ((startX - clientX) / clientWidth)
    
    self.setState({
      touched: true,
      translate: vise(0, percentage * 100, 105),
      opacity: vise(0, 1 - percentage, 1)
    })
  }

  private handleTouchEnd(self) {
    self.setState({ touched: false })

    if (self.state.translate >= 50) {
      self.setState({ translate: 105, opacity: 0 })
      /** Normal event listener */
      if (typeof self.props.onClose === 'function') self.props.onClose()

      /** Inferno's linkEvent function */
      if (typeof self.props.onClose === 'object') {
        self.props.onClose.event(self.props.onClose.data)
      }
    } else {
      self.setState({ translate: 0, opacity: 1 })
    }

    if(!self.props.opened) {
      self.setState({ translate: 0, opacity: 1 })
    }
  }
  
  render(props, state) {
    const { onClose, permanent, responsive, opened, overlay } = props
    const { touched, translate, opacity, viewWidth } = state
    const isntTouchable = permanent || overlay === false || (viewWidth >= 960 && responsive)

    return (
      <div
        ref={e => this.container = e}
        onTouchStart={isntTouchable ? null : linkEvent(this, this.handleTouchStart)}
        onTouchMove={isntTouchable ? null : linkEvent(this, this.handleTouchMove)}
        onTouchEnd={isntTouchable ? null : linkEvent(this, this.handleTouchEnd)}
      >
        <Drawer
          {...props}
          touched={touched}
          style={{ transform: touched ? `translateX(-${translate}%)` : null }}
        />
        {overlay === false
          ? null
          : <Overlay
              touched={touched}
              opened={opened}
              permanent={permanent}
              responsive={responsive}
              onClick={onClose ? onClose : null}
              style={{ opacity: touched ? opacity : null }}
            />
        }
      </div>
    )
  }
}
