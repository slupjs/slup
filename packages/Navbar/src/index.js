import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { darken }     from 'polished'

export const Bar = styled.div`
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition:
    max-height 150ms cubic-bezier(0.4, 0.0, 0.2, 1),
        height 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  height: 64px;
  max-height: ${props => props.maxHeight}px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${props => props.theme.text || lightTheme.text};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : darken(0.02, props.theme.background || lightTheme.background)
  };
  position:   ${props => props.fixed || props.reveal
    ? 'fixed'
    : 'absolute'
  };
  right: 0;
  left: 0;
  z-index: 998;

  @media only screen and (max-width: 960px) {
    height: 56px;
  }
`

export class Navbar extends Component {
  previousY = 0
  previousX = 0
  state = { maxHeight: 64 }

  componentDidMount() {
    if (this.props.reveal)
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    if (this.props.reveal)
      window.removeEventListener('scroll', this.handleScroll)
  }

  @bind
  handleScroll() {
    const currentX = window.scrollX
    const currentY = window.scrollY

    // Ignore the horizontal scroll
    if(currentX !== this.previousX)
      return this.previousX = currentX

    if (currentY < this.previousY)
      this.setState({ maxHeight: 64 })
    else
      this.setState({ maxHeight: 0 })

    this.previousY = currentY
  }

  render(props) {
    return <Bar {...props} maxHeight={this.state.maxHeight} />
  }
}
