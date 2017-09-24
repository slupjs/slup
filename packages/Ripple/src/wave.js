import styled from 'styled-components'
import { lightTheme } from '@slup/theming'

export const Wave = styled.div`
  position: absolute;
  top: ${props => props.y - 5}px;
  left: ${props => props.x - 5}px;
  pointer-events: none;
  height: 10px;
  width: 10px;
  background: rgba(255, 255, 255, .45);
  opacity: ${props => props.ended && props.isRemovable
    ? 0 /** If the item should be removed, do a gradual fading */
    : 1 /** Otherwise show it */
  };
  transition: 
    transform 900ms cubic-bezier(0.4, 0.0, 0.2, 1),
    opacity   250ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: scale(${props => props.scale});
  border-radius: 50%;
`