import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

import { Ripple }     from '@slup/ripple'
import { lightTheme } from '@slup/theming'
import { rgba }       from 'polished'

const FlatBase = styled.button`
  /* Not changing values */
  position: relative;
  font-family: inherit;
  font-weight: 500;
  border: none; outline: none;
  min-height: 36px;
  min-width: 88px;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 8px;
  padding: 0 8px;
  transition: background 150ms linear;
  user-select: none;
  background: transparent;

  /* Changing values */
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

export class FlatButton extends Component {
  render(props) {
    return(
      <FlatBase {...props}>
        {props.children}
        {props.ripple == false || props.disabled
          ? null
          : <Ripple {...props.rippleOptions} />
        }
      </FlatBase>
    )
  }
}
