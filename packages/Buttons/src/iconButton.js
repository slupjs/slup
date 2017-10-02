import Inferno   from 'inferno'
import styled    from 'styled-components'
import { rgba }  from 'polished'

import { lightTheme } from '@slup/theming'
import { Ripple }     from '@slup/ripple'

const IconBase = styled.button`
  /**
   * Disables blue background on tap in mobile devices.
   * See:
   * - https://stackoverflow.com/a/29961714
   * - #32
   */
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
  fill: ${props => props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.primary
      ? props.theme.primary || lightTheme.primary
      : rgba(props.theme.text || lightTheme.text, .87)
  };
`

export const IconButton = (props) =>
  <IconBase {...props}>
    {props.children}
    <Ripple
      startX={'50%'}
      startY={'50%'}
      primary={props.primary}
      secondary={props.secondary}
      {...props.rippleOptions}
    />
  </IconBase>
