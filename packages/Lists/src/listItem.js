import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'
import styled    from 'styled-components'

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.nested ? '0 16px 0 32px' : '0 16px'};
  flex: 1;
  min-height: ${props => props.twoline ? '72px' : props.threeline ? '88px' : '48px'};
  position: relative;
  transition: background 150ms linear;
  &:hover {
    cursor: ${props => props.hoverable ? 'pointer' : 'text'};
    background: ${props => props.hoverable ? 'rgba(158,158,158,0.2)' : 'transparent'};
  }
`

export class ListItem extends Component {
  state = { visible: false }

  @bind
  handleClick(e) {
    const { visible } = this.state

    this.setState({ visible: !visible })

    if(this.props.nestedTrigger) {
      if (visible) {
        e.target.parentElement.parentElement.style.maxHeight = '500px'
      } else {
        e.target.parentElement.parentElement.style.maxHeight = '48px'
      }
    }
  }

  render(props) {
    return <Li {...props} onClick={this.handleClick} />
  }
}
