import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'


const Border = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  transition: border 150ms linear;
  border: 2px solid ${props => props.disabled ? '#9e9e9e' : props.checked ? 'teal' : '#9e9e9e'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`

const Circle = styled.div`
  width: ${props => props.size - 6}px;
  height: ${props => props.size - 6}px;
  pointer-events: none;
  background-color: ${props => props.disabled ? '#9e9e9e' : props.checked ? 'teal' : '#9e9e9e'};
  border-radius: 50%;
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.checked ? 'scale(1)' : 'scale(0)'};
`

export class Radio extends Component {
  render(props) {
    return <Border {...props}><Circle {...props} /></Border>
  }
}
