import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { Ripple }     from '@slup/ripple'
import { lightTheme } from '@slup/theming'
import { rgba }       from 'polished'

const Item = styled.div`
  box-sizing: border-box;
  min-height: 48px;
  max-height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 12px;
  max-width: 252px;
  min-width: 148px;
  cursor: pointer;
  user-select: none;
  font-weight: bolder;
  position: relative;
  transition: color 150ms;
  color: ${props => props.selected && props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.selected
      ? props.theme.text || lightTheme.text
      : rgba(props.theme.text || lightTheme.text, .5)
  };

  &:hover {
    color: ${props => props.selected && props.secondary
      ? props.theme.secondary || lightTheme.secondary
      : props.selected
        ? props.theme.text || lightTheme.text
        : rgba(props.theme.text || lightTheme.text, .7)
    };
  }

  @media only screen and (max-width: 600px) {
    min-width: 60px;
  }
`

export const Tab = (props) =>
  <Item {...props} selected={props.selected}>
    {props.children}
    <Ripple />
  </Item>
