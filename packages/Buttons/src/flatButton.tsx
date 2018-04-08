import Inferno   from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import styled, { lightTheme, rgba } from '@slup/theming'
import { ButtonBase } from './buttonBase'

const setColor = (props, alpha: number) =>
  props.primary
    ? rgba(props.theme.primary || lightTheme.primary, alpha)
    : props.secondary
      ? rgba(props.theme.secondary || lightTheme.secondary, alpha)
      : rgba(props.theme.text || lightTheme.text, alpha)


const FlatBase = styled(ButtonBase) `
  transition: background 150ms linear;
  background: transparent;
  cursor: pointer;
  color: ${props => setColor(props, 1)};

  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.dark
      ? rgba(props.theme.text || lightTheme.text, .3)
      : rgba(props.theme.text || lightTheme.text, .26)
    };
  }

  &:hover:not(:disabled), &:focus {
    background: ${props => setColor(props, .14)};
  }
`

export class FlatButton extends Component<any, any> {
  render(props) {
    return (
      <FlatBase {...props}>
        {props.children}
        {props.ripple == false || props.disabled
          ? null
          : <Ripple
            primary={props.primary}
            secondary={props.secondary}
            {...props.rippleOptions}
          />
        }
      </FlatBase>
    )
  }
}
