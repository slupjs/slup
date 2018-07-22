import { Ripple } from '@slup/ripple'
import styled, {
  lightTheme,
  rgba,
  darken,
  lighten
} from '@slup/theming'
import { ButtonBase } from './buttonBase'

const RaisedBase = styled(ButtonBase)`
  transition: box-shadow 150ms linear;
  display: flex;
  align-items: center;

  padding: ${props => props.icon ? '0 16px 0 12px' : '0 16px'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  color: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .26)
    : props.theme.text || lightTheme.text
  };

  fill: currentColor;

  background: ${props => props.theme.dark && !props.primary && !props.secondary
    ? lighten(.1, props.theme.background || lightTheme.background)
    : props.disabled
    ? rgba(props.theme.text || lightTheme.text, .12)
      : props.primary
      ? props.theme.primary || lightTheme.primary
        : props.secondary
          ? props.theme.secondary || lightTheme.secondary
          : darken(.1, props.theme.background || lightTheme.background)
  };

  box-shadow: ${props => props.disabled
    ? 'none'
    : `0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12)`
  };

  &:active {
    box-shadow: ${props => props.disabled
      ? 'none'
      : `0px 5px 5px -3px rgba(0, 0, 0, 0.2),
        0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12)`
    };
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
		transition: opacity 150ms;
		opacity: 0;
    background: ${props => props.theme.text || lightTheme.text};
  }

	&:focus::before {
		opacity: .2;
	}

  span {
    padding-left: 8px;
  }
`

export const ContainedButton = props =>
  <RaisedBase {...props}>
    {props.icon ? props.icon : null}
    {props.icon
      ? <span>{props.children}</span>
      : props.children
    }
    {props.ripple === false || props.disabled
      ? null
      : <Ripple {...props.rippleOptions} />
    }
  </RaisedBase>
