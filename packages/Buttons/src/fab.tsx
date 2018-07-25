import { SHADOW } from '@slup/common'
import { Ripple } from '@slup/ripple'
import styled, { lightTheme } from '@slup/theming'

export const Circle = styled.button`
  position: relative;
  font-size: 24px;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 150ms linear;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${SHADOW[2]};

  /** 
   * Disables blue background on tap in mobile devices.
   * See: 
   * - https://stackoverflow.com/a/29961714
   * - #32
   */
  -webkit-tap-highlight-color: transparent;

  width: ${props => props.mini ? 40 : 56}px;
  height: ${props => props.mini ? 40 : 56}px;
  color: ${props => props.theme.text || lightTheme.text};
  fill: ${props => props.theme.text || lightTheme.text};
  background: ${props => props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.primary   || lightTheme.primary
  };

  &:active {
    box-shadow: ${SHADOW[8]};
  }
`

export const Fab = props =>
  <Circle {...props}>
    {props.children}
    {props.ripple === false
      ? null
      : <Ripple {...props.rippleOptions} />
    }
  </Circle>