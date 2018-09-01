import { Ripple } from '@slup/ripple'
import styled, { lightTheme, rgba } from '@slup/theming'
import { ButtonBase, setColor } from './buttonBase'

const FlatBase = styled(ButtonBase)`
  transition: background 150ms linear;
  background: transparent;
  padding: 0 8px;
  color: ${props => setColor(props, 1)};

  &:disabled {
    color: ${props => props.theme.dark
      ? rgba(props.theme.text || lightTheme.text, .3)
      : rgba(props.theme.text || lightTheme.text, .26)
    };
  }

  &:hover:not(:disabled), &:focus {
    background: ${props => setColor(props, .14)};
  }
`

export const TextButton = props =>
  <FlatBase {...props}>
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
  </FlatBase>