import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

import { Ripple }     from '@slup/ripple'
import { lightTheme } from '@slup/theming'

const RaisedBase = styled.button`
  background: ${props => props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.primary   || lightTheme.primary
  };
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
  color: ${props => props.theme.text || lightTheme.text};
  transition: box-shadow 150ms linear;
  user-select: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`

export class RaisedButton extends Component {
  render(props) {
    return(
      <RaisedBase {...props}>
        {props.children}
        {props.ripple == false
          ? null
          : <Ripple {...props.rippleOptions} />
        }
      </RaisedBase>
    )
  }
}
