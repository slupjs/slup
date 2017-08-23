import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'
import styled    from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${props => props.sublist ? 'column' : 'row'};
  padding: ${props => props.nested ? '0 16px 0 32px' : '0 16px'};
  flex: 1;
  transition: background 150ms linear;
  min-height: ${props => props.twoline ? '72px'
    : props.threeline ? '88px'
    : '48px'};

  transition: max-height 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
  height: auto;
  max-height: ${props => props.visible && props.sublist ? '1248px' : '48px'};
  position: relative;

  &:hover {
    cursor: ${props => props.hoverable ? 'pointer' : 'text'};
    background: ${props => props.hoverable ? 'rgba(158,158,158,0.2)' : 'transparent'};
  }
`
