import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'
import styled    from 'styled-components'

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props => props.sublist ? 'column' : 'row'};
  padding: ${props => props.nested ? '0 16px 0 32px' : '0 16px'};
  flex: 1;
  transition: background 150ms linear, height 250ms linear;
  min-height: ${props => props.twoline ? '72px'
    : props.threeline ? '88px'
    : '48px'};
  height: ${props => !props.trigger ? props.height : 'auto'};
  position: relative;

  &:hover {
    cursor: ${props => props.hoverable ? 'pointer' : 'text'};
    background: ${props => props.hoverable ? 'rgba(158,158,158,0.2)' : 'transparent'};
  }
`

export class ListItem extends Component {

  render(props) {
    return <Li {...props} />
  }
}
