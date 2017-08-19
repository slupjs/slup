import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'


const Border = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: border 300ms linear;
  border: 2px solid ${props => props.checked ? 'teal' : '#9e9e9e'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Circle = styled.div`
  width: 12px;
  height: 12px;
  background: teal;
  border-radius: 50%;
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.checked ? 'scale(1)' : 'scale(0)'};
`

export class Radio extends Component {

  render() {
    return (
      <Border onClick={this.props.onClick} checked={this.props.checked}>
        <Circle checked={this.props.checked} />
      </Border>
    )
  }
}
