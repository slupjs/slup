import styled, { lightTheme, rgba, css } from '@slup/theming'
import { Container, handleKeyDown }  from './container'

const Border = styled.div`
  /* Geometry */
  width: ${props =>  props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

   /* Border colors and transition */
  transition: border 150ms linear;
  border: 2px solid ${props => props.checked
    ? props.theme.secondary || lightTheme.secondary
    : rgba(props.theme.text || lightTheme.text, .54)
  };
  /* Children alignment */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover span {
    transform: scale(2.8);
    opacity: .1;
  }

  &:focus span {
    transform: scale(2.8);
    opacity: .2;
  }

  &:active span {
    transform: scale(2.8);
    opacity: .3;
  }

  ${props => props.disabled && css`
    border-color: ${rgba(props.theme.text || lightTheme.text, .3)};
    pointer-events: none;
  `};
`

const Circle = styled.div`
  /* Geometry */
  width: ${props =>  props.size - 6}px;
  height: ${props => props.size - 6}px;
  background: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .3)
    : props.checked
      ? props.theme.secondary || lightTheme.secondary
      : 'transparent'
  };
  border-radius: 50%;

  /* Transitions and animations */
  transition: transform 100ms linear, background 100ms linear;
  transform: ${props => props.checked
    ? 'scale(1)'
    : 'scale(0)'
  };
`

const Wave = styled.span`
  width: ${props =>  props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  pointer-events: none;
  transition: background 150ms linear,
    opacity 150ms linear,
    transform 200ms linear;
  transform: scale(0);
  opacity: 0;
  background-color: ${props => props.checked
    ? props.theme.secondary || lightTheme.secondary
    : rgba(props.theme.text || lightTheme.text, .3)
  };
`

interface IProps {
  disabled?: boolean
  checked: boolean
  onChange?: () => any
  leftLabel?: string
  rightLabel?: string
}

export const Radio = (props: IProps) =>
  <Container
    onChange={props.onChange}
    leftLabel={props.leftLabel}
    rightLabel={props.rightLabel}
    disabled={props.disabled}
  >
    <Border
      {...props}
      tabIndex={props.disabled || !props.checked ? -1 : 0}
      onClick={props.onChange}
      size={16}
    >

      <Circle
        disabled={props.disabled}
        checked={props.checked}
        size={16}
      />

      {!props.disabled
        ? <Wave
            checked={props.checked}
            size={16}
          />
        : null
      }
    </Border>
  </Container>
