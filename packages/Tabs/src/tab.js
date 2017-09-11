import Inferno from 'inferno'
import styled  from 'styled-components'

import { Ripple } from '@slup/ripple'

const Item = styled.div`
  min-height: 48px;
  max-height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 12px;
  cursor: pointer;
  user-select: none;
  position: relative;
`

export const Tab = (props) =>
  <Item>
    {props.children}
    <Ripple />
  </Item>
