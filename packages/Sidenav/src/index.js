import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind } from 'decko'

const Drawer = styled.div`
  z-index: 1000;
  transition: max-width 150ms linear, transform 320ms cubic-bezier(0.4, 0.0, 0.2, 1);
  height: 100%;
  width: calc(100% - 64px);
  max-width: 320px;
  background: #fff;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 0;
  left: ${props => props.right ? 'auto' : '0'};
  right: ${props => props.right ? '0' : 'auto'};
  transform: ${props => props.right && !props.opened ? 'translateX(105%)' : props.opened ? 'translateX(0)' : 'translateX(-105%)'};

  @media only screen and (max-width: 960px) {
    width: calc(100% - 56px);
    max-width: 280px;
  }
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: pink;
  z-index: 999;
  transition: opacity 150ms linear;
  opacity: .48;
  transition: background 320ms linear;
  pointer-events: ${props => props.opened  ? 'auto' : 'none'};
  background: ${props => props.opened  ? 'rgb(33, 33, 33)' : 'transparent'};
`

export class Sidenav extends Component {
  @bind
  handleClick(e) {
    if(this.props.onClose) {
      this.props.onClose(e)
    }
  }

  render(props) {
    return (
      <div>
        <Drawer {...props} />
        <Overlay {...props} onClick={this.handleClick} />
      </div>
    )
  }
}
