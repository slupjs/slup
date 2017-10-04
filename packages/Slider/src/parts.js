import styled         from 'styled-components'
import { rgba }       from 'polished'

import { lightTheme } from '@slup/theming'


export const Container = styled.div`
  height: 38px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  outline: none;
  opacity: ${props => props.disabled ? '.3' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:focus {
    div:nth-child(3) {
      width: ${props => props.discrete ? '0' : '14px'};
      height: ${props => props.discrete ? '0' : '14px'};
      box-shadow: ${props => props.focus
    ? 'none'
    : props.value == 0 && !props.discrete
      ? '0 0 0 14px rgba(0, 0, 0, .1)'
      : props.discrete
        ? 'none'
        : `0 0 0 14px ${rgba(props.theme.secondary || lightTheme.secondary, .1)}`
  };
    }

    div:nth-child(5) {
      transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
      transform: ${props => props.discrete
    ? 'translateX(-50%) scale(1)'
    : 'translateX(-50%) scale(0)'
  };
    }
  }
`

export const Line = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  background: ${props => props.theme.text || lightTheme.text};
  opacity: ${props => props.disabled ? '1' : '.3'};
  z-index: 1;
`

export const Thumb = styled.div`
  transition: height 300ms, width 300ms, box-shadow 300ms, background 150ms;
  width: ${props => props.focus ? '14px' : '10px'};
  height: ${props => props.focus ? '14px' : '10px'};
  border-radius: 50%;

  background: ${props => props.disabled && props.value == 0
    ? props.theme.background || lightTheme.background                  /* Disabled or = to 0(at the beginning) */
    : props.disabled
      ? props.theme.text || lightTheme.text                            /* Disabled */
      : props.discrete && props.value == 0
        ? props.theme.text || lightTheme.text                          /* Not disabled, discrete but still at beginning */
        : props.value == 0
          ? props.theme.background || lightTheme.background            /* At the beginning */
          : props.theme.secondary || lightTheme.secondary              /* Moved */
  };
  
  border: ${props => props.disabled && props.value == 0
    ? `2px solid ${props.theme.text || lightTheme.text}`
    : props.disabled
      ? `2px solid ${props.theme.background || lightTheme.background}`
      : props.value == 0 && !props.discrete
        ? `2px solid ${rgba(props.theme.text || lightTheme.text, .3)}`
        : 'none'
  };
  position: absolute;
  transform: translateX(-50%);
  box-shadow: none;
  z-index: 2;
`

export const Track = styled.div`
  height: 3px;
  position: absolute;
  background: ${props => props.disabled
    ? 'transparent'
    : props.theme.secondary || lightTheme.secondary
  };
  z-index: 1;
`
