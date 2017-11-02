import Inferno   from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import styled, { lightTheme, rgba } from '@slup/theming'
import { ButtonBase } from './buttonBase'

const FlatBase = styled(ButtonBase)`
  transition: background 150ms linear;
  background: transparent;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .26)
    : props.primary
      ? props.theme.primary || lightTheme.primary
      : props.theme.text || lightTheme.text
  };

  &:hover {
    background: ${props => props.disabled ? 'transparent' : 'rgba(158,158,158,0.4)'};
  }
`

export class FlatButton extends Component<any, any> {
  render(props) {
    return(
      <FlatBase {...props}>
        {props.children}
        {props.ripple == false || props.disabled
          ? null
          : <Ripple
              primary={props.primary}
              {...props.rippleOptions}
            />
        }
      </FlatBase>
    )
  }
}
