import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { darken }     from 'polished'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };
`

const Indicator = styled.div`
  position: absolute;
  bottom: 0.5px;
  transition: width 150ms;
  height: 2px;
  background: ${props => props.theme.secondary || lightTheme.secondary};
`

export class TabContainer extends Component {
  componentDidMount() {
    const rect = this.tabContainer.children[this.props.selected]
    this.tabContainer.lastChild.style.width = rect.clientWidth + 'px'
    this.tabContainer.lastChild.style.left = rect.offsetLeft + 'px'
    window.addEventListener('resize', this.handleResize)
  }

  @bind
  handleResize() {
    const rect = this.tabContainer.children[this.props.selected]
    this.tabContainer.lastChild.style.width = rect.clientWidth + 'px'
    this.tabContainer.lastChild.style.left = rect.offsetLeft + 'px'
  }

  render(props) {
    return(
      <Container {...props} innerRef={e => this.tabContainer = e}>
        {props.children}
        <Indicator />
      </Container>
    )
  }
}
