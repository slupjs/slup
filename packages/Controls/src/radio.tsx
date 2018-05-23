import Inferno, { linkEvent, Component } from 'inferno'

import styled, { lightTheme, rgba } from '@slup/theming'
import { Container }  from './container'

const Border = styled.div`
  /* Geometry */
  width: ${props =>  props.size || 16}px;
  height: ${props => props.size || 16}px;
  border-radius: 50%;

   /* Border colors and transition */
  transition: border 150ms linear;
  border: 2px solid ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .3)
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : rgba(props.theme.text || lightTheme.text, .7)
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
  background: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .3)
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : 'transparent'
  };
  border-radius: 50%;

  /* Transitions and animations */
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1), background 150ms linear;
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
      ? props.theme.secondary || lightTheme.secondary
      : 'grey'};
`

export class Radio extends Component<any, any> {
  state = {
    transform: 'scale(0)',
    opacity: '0.2'
  }

  createWave(this) {
    this.setState({
      transform: 'scale(3)',
      opacity: '0.2'
    })
  }

  destroyWave(this) {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    }, 150)
  }

  render(props) {
    return (
      <Container {...props}>
        <Border
          {...props}
          tabIndex={0}
          onClick={props.onChange}
          onMouseDown={linkEvent(this, this.createWave)}
          onMouseUp={linkEvent(this, this.destroyWave)}
          onFocus={linkEvent(this, this.createWave)}
          onBlur={linkEvent(this, this.destroyWave)}
        >

          <Circle {...props} />

          <Wave
            {...props}
            transform={this.state.transform}
            opacity={this.state.opacity}
          />
        </Border>
      </Container>
    )
  }
}
