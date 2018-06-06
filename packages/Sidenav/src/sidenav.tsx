import { linkEvent, Component } from 'inferno'
import styled, { lightTheme } from '@slup/theming'
import { Overlay, Drawer } from './overlay'

export class Sidenav extends Component<any, any> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this))
  }

  handleKeyDown({ keyCode }) {
    if(this.props.opened && keyCode === 27) {
      /** Normal event listener */
      if(typeof this.props.onClose === 'function') this.props.onClose()
      
      /** Inferno's linkEvent function */
      if(typeof this.props.onClose === 'object') {
        this.props.onClose.event(this.props.onClose.data)
      }
    }
  }

  render({ onClose, ...props }) {
    return (
      <div>
        <Drawer {...props} />
        {props.overlay == false
          ? null
          : <Overlay
              opened={props.opened}
              permanent={props.permanent}
              responsive={props.responsive}
              onClick={onClose ? onClose : null}
            />
        }
      </div>
    )
  }
}
