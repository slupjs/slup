import Inferno   from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import styled, { lightTheme } from '@slup/theming'

const Circle = styled.button`
  position: relative;
  font-size: 24px;
  border: none; outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 150ms linear;
  user-select: none;
  display: flex;
  align-items: center; justify-content: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  /** 
   * Disables blue background on tap in mobile devices.
   * See: 
   * - https://stackoverflow.com/a/29961714
   * - #32
   */
  -webkit-tap-highlight-color: transparent;

  width: ${props => props.mini ? '40px' : '56px'};
  height: ${props => props.mini ? '40px' : '56px'};
  color: ${props => props.theme.text || lightTheme.text};
  background: ${props => props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.primary   || lightTheme.primary
  };

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`

export class Fab extends Component<any, any> {
  render(props) {
    return(
      <Circle {...props}>
        {props.children}
        {props.ripple == false
          ? null
          : <Ripple {...props.rippleOptions} />
        }
      </Circle>
    )
  }
}
