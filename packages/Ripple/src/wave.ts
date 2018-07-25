import { EASING } from '@slup/common'
import styled, { rgba, lightTheme } from '@slup/theming'

export const Wave = styled.div`
  position: absolute;
  top: ${props => isNaN(props.y)
    ? `calc(${props.y} - 5px)` /** String(ex. 50%) */
    : props.y - 5 + 'px'       /** Number(ex. 122 => 122px) */
  };
  left: ${props => isNaN(props.x)
    ? `calc(${props.x} - 5px)` /** String(ex. 50%) */
    : props.x - 5 + 'px'       /** Number(ex. 122 => 122px) */
  };
  pointer-events: none;
  height: 10px;
  width: 10px;
  background: ${props => props.primary
    ? rgba(props.theme.primary || lightTheme.primary, .3)
    : props.secondary
      ? rgba(props.theme.secondary || lightTheme.secondary, .3)
      : rgba(props.theme.text || lightTheme.text, .15)
  };
  opacity: ${props => props.ended && props.isRemovable
    ? 0 /** If the item should be removed, do a gradual fading */
    : 1 /** Otherwise show it */
  };
  transition:
    transform 900ms ${EASING['standard']},
    opacity   250ms ${EASING['standard']};
  transform: scale(${props => props.scale});
  border-radius: 50%;
`
