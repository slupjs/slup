import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'


const Border = styled.div`
  // Geometry
  width: ${props =>  props.size || 16}px;
  height: ${props => props.size || 16}px;
  border-radius: 50%;

  // Border colors and transition
  transition: border 150ms linear;
  border: 2px solid ${props => props.disabled
    ? '#9e9e9e'
    : props.checked
      ? 'teal'
      : '#9e9e9e'
  };
	// Children alignment
  display: flex;
  justify-content: center;
  align-items: center;

	// Cursor properties
  cursor: ${props => props.disabled
	  ? 'auto'
    : 'pointer'
  };
  pointer-events: ${props => props.disabled
    ? 'none'
    : 'auto'
  };
`

const Circle = styled.div`
  // Positioning and styling
  width: ${props =>  (props.size || 16) - 6}px;
  height: ${props => (props.size || 16) - 6}px;
  background-color: ${props => props.disabled
    ? '#9e9e9e'
    : props.checked
      ? 'teal'
      : '#9e9e9e'
  };
  border-radius: 50%;

  // Transitions and animations
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.checked
    ? 'scale(1)'
    : 'scale(0)'
  };
`

export class Radio extends Component {
  render(props) {
    return <Border {...props}>
      <Circle
        checked={props.checked}
        disabled={props.disabled}
      />
    </Border>
  }
}
