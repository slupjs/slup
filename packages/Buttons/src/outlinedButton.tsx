import { Ripple } from '@slup/ripple'
import styled, { lightTheme, rgba } from '@slup/theming'
import { ButtonBase, setColor } from './buttonBase'

const OutlinedBase = styled(ButtonBase)`
  transition: background 150ms linear;
  background: transparent;
	padding: ${props => props.icon ? '0 16px 0 12px' : '0 16px'};
  border: 1px solid ${props => rgba(props.theme.text || lightTheme.text, .12)};
  color: ${props => setColor(props, 1)};

  &:disabled {
    border-color: ${props => rgba(props.theme.text || lightTheme.text, .08)};
    color: ${props => rgba(props.theme.text || lightTheme.text, .38)};
  }

  &:focus {
    background: ${props => setColor(props, .1)};
  }
`

export const OutlinedButton = props =>
  <OutlinedBase {...props}>
		{props.icon ? props.icon : null}
		{props.icon
			? <span style={{ paddingLeft: 8 }}>{props.children}</span>
			: props.children
		}
    {props.ripple === false || props.disabled
      ? null
      : <Ripple
          primary={props.primary}
          secondary={props.secondary}
          {...props.rippleOptions}
        />
    }
  </OutlinedBase>