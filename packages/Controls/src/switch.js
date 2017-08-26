import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

const Bar = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 8px;
  outline: none;
  background: ${props => props.disabled ? 'rgba(0, 0, 0, .12)'
    : props.checked ? 'rgba(0, 150, 136, .7)'
    : 'rgba(0, 0, 0, .38)'};
  position: relative;
  transition: background 200ms linear;
  cursor: ${props => props.disabled
    ? 'not-allowed'
    : 'pointer'
  };
  pointer-events: ${props => props.disabled
    ? 'none'
    : 'auto'
  };
`

const Thumb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1), background 200ms linear;
  background: ${props => props.disabled ? '#BDBDBD'
    : props.checked ? 'rgb(0, 150, 136)'
    : '#FAFAFA'};
  position: absolute;
  top: -3px; left: -2px;
  transform: ${props => props.checked ? 'translateX(100%)' : 'translateX(0)'};
  pointer-events: none;
  outline: none;
`

const Wave = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: -1;
  pointer-events: none;transition: background 150ms linear,
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


export class Switch extends Component {
  state = {
    transform: 'scale(0)',
    opacity: '0.2'
  }

  @bind
  createWave() {
    this.setState({
      transform: 'scale(2.5)',
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
  handleKeyDown({ keyCode }) {
    if(keyCode == 32 && this.props.onChange && !this.props.disabled) {
      this.props.onChange()
    }
  }

  render(props) {
    return(
      <Bar 
        {...props}
        onClick={props.onChange}
        tabIndex={0}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.createWave}
        onMouseUp={this.destroyWave}
        onFocus={this.createWave}
        onBlur={this.destroyWave}
      >
        <Thumb
          onClick={props.onChange}
          checked={props.checked}
          disabled={props.disabled}>
            <Wave
              checked={props.checked}
              disabled={props.disabled}
              transform={this.state.transform}
              opacity={this.state.opacity}
            />
          </Thumb>
      </Bar>
    )
  }
}
