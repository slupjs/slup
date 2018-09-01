import styled from '@slup/theming'
import { Ripple } from '@slup/ripple'
import { setColor } from './buttonBase'

const IconBase = styled.button`
  -webkit-tap-highlight-color: transparent;
  
  border: 0;
  outline: 0;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: none;
  fill: currentColor;
  color: ${props => setColor(props, .87)};

  &:disabled {
    cursor: not-allowed;
    color: ${props => setColor(props, .38)};
  }
`

export const IconButton = props =>
  <IconBase {...props}>
    {props.children}
    {props.disabled
      ? null
      : <Ripple
          startX={props.centerRipple === false ? null : '50%'}
          startY={props.centerRipple === false ? null : '50%'}
          primary={props.primary}
          secondary={props.secondary}
          {...props.rippleOptions}
        />
    }
  </IconBase>
