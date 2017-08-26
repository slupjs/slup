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
  transition: background 150ms linear,
    opacity 150ms linear,
    transform 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
  opacity: ${props => props.opacity};
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
    opacity: '0.2'
  }

  @bind
  createWave() {
    this.setState({
      transform: 'scale(3)',
      opacity: '0.2'
    })
  }

  @bind
  destroyWave() {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    }, 150)
  }

  @bind
  handleMouseDown() {
    this.createWave()
  }

  @bind
  handleMouseUp() {
    this.destroyWave()
  }

  @bind
  handleFocus() {
    this.createWave()
  }

  @bind
  handleBlur() {
    this.destroyWave()
  }

  render(props) {
    return (
      <Border
        {...props}
        tabIndex={0}
        onClick={props.onChange}
        onMouseDown={this.createWave}
        onMouseUp={this.destroyWave}
        onFocus={this.createWave}
        onBlur={this.destroyWave}>

        <Circle
          checked={props.checked}
          disabled={props.disabled}
          size={props.size}
        />

        <Wave
          checked={props.checked}
          disabled={props.disabled}
          size={props.size}
          transform={this.state.transform}
          opacity={this.state.opacity}
        />
      </Border>
    )
  }
}
