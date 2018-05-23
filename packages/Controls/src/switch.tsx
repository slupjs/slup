import { linkEvent, Component } from 'inferno'
import styled, { lightTheme, rgba, lighten } from '@slup/theming'
import { Container } from './container'

const Bar = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 8px;
  outline: none;
  background: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .12)
    : props.checked
      ? rgba(props.theme.secondary || lightTheme.secondary, .7)
      : rgba(props.theme.text || lightTheme.text, .3)
  };
  position: relative;
  transition: background 250ms linear;
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
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1), background 200ms linear;
  background: ${props => props.theme.dark && props.disabled
    ? lighten(.05, props.theme.background || lightTheme.background)
    : props.disabled
      ? lighten(.7, props.theme.text || lightTheme.text)
        : props.theme.dark
        /** Dark */
        ? props.checked
          ? props.theme.secondary || lightTheme.secondary
          : props.theme.text

        /** Light */
        : props.checked
          ? props.theme.secondary || lightTheme.secondary
          : props.theme.background || lightTheme.background
  };
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
  pointer-events: none;transition: background 150ms linear,
    opacity 150ms linear,
    transform 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  background: ${props => props.checked && !props.disabled
    ? rgba(props.theme.secondary || lightTheme.secondary, .4)
    : rgba(props.theme.text || lightTheme.text ,.4)
  };
`


export class Switch extends Component<any, any> {
  state = {
    transform: 'scale(0)',
    opacity: '0.2'
  }

  createWave(this) {
    this.setState({
      transform: 'scale(2.5)',
      opacity: '0.2'
    })
  }

  destroyWave(this) {
    this.setState({ opacity: '0.05' })

    setTimeout(() => {
      this.setState({ transform: 'scale(0)' })
    }, 150)
  }

  handleKeyDown(this, { keyCode }) {
    if(keyCode == 32 && this.props.onChange && !this.props.disabled) {
      this.props.onChange()
    }
  }

  render(props) {
    return(
      <Container
        onChange={props.onChange}
        leftLabel={props.leftLabel}
        rightLabel={props.rightLabel}
        disabled={props.disabled}
      >
        <Bar
          {...props}
          onClick={props.onChange}
          tabIndex={0}
          onKeyDown={linkEvent(this, this.handleKeyDown)}
          onMouseDown={linkEvent(this, this.createWave)}
          onMouseUp={linkEvent(this, this.destroyWave)}
          onFocus={linkEvent(this, this.createWave)}
          onBlur={linkEvent(this, this.destroyWave)}
        >
          <Thumb
            onClick={props.onChange}
            {...props}>
              <Wave
                {...props}
                transform={this.state.transform}
                opacity={this.state.opacity}
              />
            </Thumb>
        </Bar>
      </Container>
    )
  }
}
