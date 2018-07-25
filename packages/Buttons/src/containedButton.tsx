import { SHADOW } from '@slup/common'
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
		? SHADOW[0]
    : SHADOW[2]
  };

  &:active {
    box-shadow: ${props => props.disabled
      ? SHADOW[0]
      : SHADOW[8]
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
		transition: opacity 300ms;
		opacity: 0;
    background: ${props => props.theme.text || lightTheme.text};
  }

	&:focus::before {
		opacity: .15;
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
