import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { Ripple }     from '@slup/ripple'
import { lightTheme } from '@slup/theming'
import { rgba }       from 'polished'

const Item = styled.div`
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  min-height: 48px;
  max-height: 72px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 12px;
  max-width: 252px;
  min-width: 148px;
  cursor: pointer;
  user-select: none;
  font-weight: bolder;
  position: relative;
  transition: color 150ms, width 150ms, min-width 200ms, fill 150ms;
  color: ${props => props.selected && props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.selected
      ? props.theme.text || lightTheme.text
      : rgba(props.theme.text || lightTheme.text, .5)
  };
  fill: ${props => props.selected && props.secondary
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
    fill: ${props => props.selected && props.secondary
      ? props.theme.secondary || lightTheme.secondary
      : props.selected
        ? props.theme.text || lightTheme.text
        : rgba(props.theme.text || lightTheme.text, .7)
    };
  }

  span {
    margin-bottom: 14px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 480px) {
    min-width: 60px;
  }
`

export const TabIcon = styled.div`
  margin: 8px 0 6px 0;
  fill: inherit;
  display: flex;
  justify-content: center;
`

export const Tab = (props) =>
  <Item {...props}>
    {props.children}
    <Ripple />
  </Item>
