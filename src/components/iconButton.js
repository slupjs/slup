import Inferno    from 'inferno'
import styled     from 'styled-components'
import { Ripple } from '@slup/ripple'

const Base = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`

export const IconButton = ({ children, ...props }) =>
  <Base {...props}>
    {children}
    <Ripple />
  </Base>