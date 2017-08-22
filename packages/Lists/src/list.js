import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  transition: max-height 350ms cubic-bezier(0.4, 0.0, 0.2, 1);
  height: auto;
  max-height: ${props => props.visible ? '500px' : '0'};
`
