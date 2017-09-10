import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'
import styled    from 'styled-components'

import { Ripple }     from '@slup/ripple'
import { whiteTheme } from '@slup/theming'

const Li = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  flex-direction: ${props => props.sublist ? 'column' : 'row'};
  padding: ${props => props.sublist ? '0'
    : props.nested ? '0 16px 0 32px'
    : '0 16px'};
  min-height: ${props => props.twoline ? '72px'
    : props.threeline ? '88px'
    : '48px'};

  color: ${props => props.theme.text || whiteTheme.text};
  transition: max-height 300ms cubic-bezier(0.4, 0.0, 0.2, 1), background 150ms linear;
  height: auto;
  max-height: ${props => props.visible && props.sublist ? '1248px' : '48px'};
  position: relative;
  user-select: ${props => props.hoverable ? 'none' : 'auto'};

  &:hover {
    cursor: ${props => props.hoverable == false || props.sublist ? 'text' : 'pointer'};
    background: ${props => props.hoverable == false || props.sublist ? 'transparent' : 'rgba(158,158,158,0.25)'};
  }
`

export class ListItem extends Component {
  render(props) {
    return(
      <Li  {...props}>
        {props.children}

        {props.ripple === false || props.sublist === true
          ? null
          : <Ripple {...props.rippleOptions} />
        }
      </Li>
    )
  }
}
