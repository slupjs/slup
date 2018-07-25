import { SHADOW, EASING } from '@slup/common'
import styled, { lightTheme, rgba, lighten, css } from '@slup/theming'
import { Container, handleKeyDown } from './container'

const Bar = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 8px;
  outline: none;
  background: ${props => props.checked
    ? rgba(props.theme.secondary || lightTheme.secondary, .54)
    : rgba(props.theme.text || lightTheme.text, .3)
  };
  position: relative;
  transition: background 100ms linear;
  cursor: pointer;

  ${props => props.disabled && css`
    background: ${rgba(props.theme.text || lightTheme.text, .12)};
    pointer-events: none;
  `};

  &:hover div div {
    transform: scale(2.4);
    opacity: .1;
  }

  &:focus div div {
    transform: scale(2.4);
    opacity: .2;
  }

  &:active div div {
    transform: scale(2.4);
    opacity: .3;
  }
`

const Thumb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -3px; left: -2px;
  box-shadow: ${SHADOW[1]};
  transition: transform 100ms ${EASING['standard']}, background 100ms linear;
  
  transform: ${props => props.checked ? 'translateX(100%)' : 'translateX(0)'};

  background: ${props => props.checked
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.background || lightTheme.background
  };

  ${props => props.theme.dark && css`
    background: ${props.checked
      ? props.theme.secondary || lightTheme.secondary
      : props.theme.text || lightTheme.text
    };
  `};

  ${props => props.disabled && css`
    background: ${props.theme.dark
      ? lighten(.05, props.theme.background || lightTheme.background)
      : lighten(.7, props.theme.text || lightTheme.text)
    };
  `};
`

const Wave = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 150ms linear,
    opacity 150ms linear,
    transform 200ms linear;
  
  transform: scale(0);
  opacity: 0;
  background: ${props => props.checked
    ? rgba(props.theme.secondary || lightTheme.secondary, .4)
    : rgba(props.theme.text || lightTheme.text, .4)
  };
`


interface IProps {
  disabled?: boolean
  checked: boolean
  onChange?: () => any
  leftLabel?: string
  rightLabel?: string
}

export const Switch = (props: IProps) =>
  <Container
    onChange={props.onChange}
    leftLabel={props.leftLabel}
    rightLabel={props.rightLabel}
    disabled={props.disabled}
  >
    <Bar
      {...props}
      onClick={props.onChange}
      tabIndex={props.disabled ? -1 : 0}
      onKeyDown={(e) => handleKeyDown(props, e)}
    >
      <Thumb
        disabled={props.disabled}
        checked={props.checked}
      >
        {!props.disabled
          ? <Wave checked={props.checked} />
          : null
        }
      </Thumb>
    </Bar>
  </Container>
