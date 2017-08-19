import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'


const Border = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: border 200ms linear;
  border: 2px solid ${props => props.disabled ? '#9e9e9e' : props.checked ? 'teal' : '#9e9e9e'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.disabled ? '#9e9e9e' : props.checked ? 'teal' : '#9e9e9e'};
  border-radius: 50%;
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.checked ? 'scale(1)' : 'scale(0)'};
`

export class Radio extends Component {
  render(props) {
    return (
      <Border onClick={props.onClick} checked={props.checked} disabled={props.disabled}>
        <Circle checked={props.checked} disabled={props.disabled} />
      </Border>
    )
  }
}
