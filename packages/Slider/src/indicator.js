import Inferno   from 'inferno'
import styled    from 'styled-components'

import { lightTheme } from '@slup/theming'

const Discrete = styled.div`
  position: absolute;
  bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.value == 0 ? '.3' : '1'};
  background: ${props => props.value == 0
    ? props.theme.text || lightTheme.text
    : props.theme.primary || lightTheme.primary
  };
  color: white;
  border-radius: 50%;
  font-size: 12px;
  user-select: none;
  height: 30px; width: 30px;
  transform-origin: bottom;
  transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1), background 150ms;
  transform: translateX(-50%) scale(0);

  &::before   {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -6.2px;
    width: 0; height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${props => props.value == 0
      ? props.theme.text || lightTheme.text
      : props.theme.primary || lightTheme.primary
    };
  }
`

export const Indicator = (props) =>
  <Discrete value={props.value} style={{left: (props.value / props.max) * 100 + '%'}}>
    <span>{Math.floor(props.value)}</span>
  </Discrete>
