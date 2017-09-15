import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { Ripple }     from '@slup/ripple'
import { darken }     from 'polished'

const leftArrow = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg>



const LeftBase = styled.div`
  width: 56px;
  min-height: 48px;
  fill: ${props => props.theme.text || lightTheme.text};
  z-index: 2;
  color: inherit;
  cursor: pointer;
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftButton = (props) =>
  <LeftBase onClick={props.onClick}>
    {leftArrow}
    <Ripple />
  </LeftBase>
