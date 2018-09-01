import { Ripple } from '@slup/ripple'
import styled from '@slup/theming'
import { Circle } from './fab'

const ExtendedCircle = styled(Circle)`
  width: auto;
  height: 48px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 500;
  border-radius: 32px;
  letter-spacing: 1px;
  padding: ${props => props.icon ? '0 20px 0 16px' : '0 20px'};
`

export const ExtendedFab = props =>
  <ExtendedCircle {...props}>
    {props.icon ? props.icon : null}
    {props.icon
			? <span style={{ paddingLeft: 8 }}>{props.children}</span>
      : props.children
    }
    {props.ripple === false
      ? null
      : <Ripple {...props.rippleOptions} />
    }
  </ExtendedCircle>