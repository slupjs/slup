import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'


const Border = styled.div`
  /* Geometry */
  width: ${props =>  props.size || 16}px;
  height: ${props => props.size || 16}px;
  border-radius: 50%;

   /* Border colors and transition */
  transition: border 150ms linear;
  border: 2px solid ${props => props.disabled
    ? '#9e9e9e'
    : props.checked
      ? 'teal'
      : '#616161'
  };
  position: relative;
  /* Children alignment */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Cursor properties */
  cursor: ${props => props.disabled
    ? 'auto'
    : 'pointer'
  };
  pointer-events: ${props => props.disabled
    ? 'none'
    : 'auto'
  };

  &:focus {
    outline: none;
  }
`

const Circle = styled.div`
  /* Positioning and styling */
  width: ${props =>  (props.size || 16) - 6}px;
  height: ${props => (props.size || 16) - 6}px;
  background-color: ${props => props.disabled
    ? '#9e9e9e'
    : props.checked
      ? 'teal'
      : '#9e9e9e'
  };
  border-radius: 50%;

  /* Transitions and animations */
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.checked
    ? 'scale(1)'
    : 'scale(0)'
  };
`

const Wave = styled.div`
  width: ${props =>  props.size || 16}px;
  height: ${props => props.size || 16}px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  pointer-events: none;
  opacity: ${props => props.opacity};
  transition: background 150ms linear, opacity 150ms linear, transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.transform};
  background-color: ${props => props.disabled
    ? 'grey'
    : props.checked
      ? 'teal'
      : 'grey'};
`

export class Radio extends Component {

  state = {
    transform: 'scale(0)',
    opacity: '0.3'
  }

  @bind
  handleMouseDown() {
    this.setState({
      transform: 'scale(3)',
      opacity: '0.3'
    })
  }

  @bind
  handleMouseUp() {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    },80)
  }

  @bind
  handleFocus() {
    this.setState({
      transform: 'scale(3)',
      opacity: '0.3'
    })
  }

  @bind
  handleBlur() {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    },80)
  }

  render(props) {
    return (
      <Border
        {...props}
        tabIndex={0}
        onClick={props.onChange}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>

        <Circle
          checked={props.checked}
          disabled={props.disabled}
        />

        <Wave
          checked={props.checked}
          disabled={props.disabled}
          transform={this.state.transform}
          opacity={this.state.opacity}
        />
      </Border>
    )
  }
}
