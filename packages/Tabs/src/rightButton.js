import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { Ripple }     from '@slup/ripple'
import { darken }     from 'polished'

const rightArrow = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>


const RightBase = styled.div`
  -webkit-tap-highlight-color: transparent;
  width: 56px;
  min-height: 48px;
  z-index: 2;
  cursor: pointer;
  position: absolute;
  right: 0;
  display: ${props => props.scrollable ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  fill: ${props => props.theme.text || lightTheme.text};
  background: ${props => props.primary
    ? darken(0.04, props.theme.primary || lightTheme.primary)
    : props.theme.background || lightTheme.background
  };
`

export const RightButton = (props) =>
  <RightBase onClick={props.onClick} {...props}>
    {rightArrow}
    <Ripple />
  </RightBase>
