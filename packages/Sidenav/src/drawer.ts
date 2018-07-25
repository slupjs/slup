import { SHADOW } from '@slup/common'
import styled, { lightTheme, css } from '@slup/theming'

export const Drawer = styled.div`
  z-index: 1000;
  overflow-y: auto;
  transition: max-width 150ms linear, ${props => !props.touched && css`
    transform 300ms ${props.opened
      ? 'cubic-bezier(0.0, 0.0, 0.2, 1)'
      : 'cubic-bezier(0.4, 0.0, 0.6, 1)'
    }
  `};
  height: 100%;
  width: calc(100% - 64px);
  max-width: 320px;
  background: ${props => props.theme.background || lightTheme.background};
  box-shadow: ${SHADOW[16]};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${props => props.responsive || props.permanent || props.opened
    ? 'translateX(0)'
    : 'translateX(-105%)'
  };

  @media only screen and (max-width: 960px) {
    width: calc(100% - 56px);
    max-width: 280px;
    transform: ${props => props.opened || props.permanent
        ? 'translateX(0)'
        : 'translateX(-105%)'
    };
  }
`

export const Overlay = styled.div`
  display: ${props => props.responsive || props.permanent ? 'none' : 'block'};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; left: 0;
  right: 0; bottom: 0;
  z-index: 999;
  transition: background 300ms linear, ${props => !props.touched && 'opacity 300ms'};
  opacity: ${props => props.opened && !props.touched ? 1 : 0};
  pointer-events: ${props => !props.opened && 'none'};
  background: ${props => props.opened ? 'rgba(33, 33, 33, .48)' : 'transparent'};

  @media only screen and (max-width: 960px) {
    display: block;
  }
`