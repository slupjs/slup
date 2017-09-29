import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { lightTheme } from '@slup/theming'

const Direction = styled.div`
  display: block;
`

const Base = styled.div`
  display: inline-flex;
`

const Label = styled.label`
  user-select: none;
  color: ${props => props.theme.text || lightTheme.text};
  margin-right: ${props => props.right ? '0' : '16px'};
  margin-left: ${props => props.right ? '16px' : '0'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export class Container extends Component {
  render(props) {
    return(
      <Direction>
        <Base>
          {props.leftLabel
            ? <Label {...props} onClick={props.disabled ? null : props.onChange}>
                {props.leftLabel}
              </Label>

            : null
          }

          {props.children}

          {props.rightLabel
            ? <Label {...props} right onClick={props.disabled ? null : props.onChange}>
                {props.rightLabel}
              </Label>

            : null
          }
        </Base>
      </Direction>
    )
  }
}
