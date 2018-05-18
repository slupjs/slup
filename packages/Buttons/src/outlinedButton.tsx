import Inferno from 'inferno'

import { Ripple } from '@slup/ripple'
import styled, { lightTheme, rgba } from '@slup/theming'
import { ButtonBase } from './buttonBase'

const setColor = (props, alpha) =>
  props.primary
    ? rgba(props.theme.primary || lightTheme.primary, alpha)
    : props.secondary
      ? rgba(props.theme.secondary || lightTheme.secondary, alpha)
      : rgba(props.theme.text || lightTheme.text, alpha)

const OutlinedBase = styled(ButtonBase)`
  padding: 0 16px;
  transition: background 150ms linear;
  background: transparent;
  cursor: pointer;
  border: 1px solid ${props => rgba(props.theme.text || lightTheme.text, .12)};
  color: ${props => setColor(props, .87)};

  &:disabled {
    border-color: ${props => rgba(props.theme.text || lightTheme.text, .08)};
    color: ${props => rgba(props.theme.text || lightTheme.text, .38)};
    cursor: not-allowed;
  }

  &:focus {
    background: ${props => setColor(props, .1)};
  }
`

export const OutlinedButton = props =>
  <OutlinedBase {...props}>
    {props.children}
    {props.ripple === false || props.disabled
      ? null
      : <Ripple
          primary={props.primary}
          secondary={props.secondary}
          {...props.rippleOptions}
        />
    }
  </OutlinedBase>