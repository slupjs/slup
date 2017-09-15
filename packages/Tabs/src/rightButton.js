import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { Ripple }     from '@slup/ripple'
import { darken }     from 'polished'

const rightArrow = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>


const RightBase = styled.div`
  width: 56px;
  height: inherit;
  z-index: 2;
  cursor: pointer;
  background: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export class RightButton extends Component {
  render() {
    return(
      <div style={{position: 'fixed', right: 0}}>
        <RightBase>
          {rightArrow}
          <Ripple />
        </RightBase>
      </div>
    )
  }
}
