import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

import { Ripple }     from '@slup/ripple'
import { whiteTheme } from '@slup/theming'

const FlatBase = styled.button`
  position: relative;
  border: none; outline: none;
  min-height: 36px;
  min-width: 88px;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 8px;
  padding: 0 8px;
  cursor: pointer;
  color: ${props => props.primary
    ? props.theme.primary
    : props.theme.text
  };
  transition: background 150ms linear;
  user-select: none;
  background: transparent;

  &:hover {
    background: rgba(158,158,158,0.4);
  }
`

export class FlatButton extends Component {
  render(props) {
    return(
      <FlatBase {...props}>
        {props.children}
        {props.ripple == false
          ? null
          : <Ripple {...props.rippleOptions} />
        }
      </FlatBase>
    )
  }
}
