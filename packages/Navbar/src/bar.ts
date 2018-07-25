import { SHADOW, EASING } from '@slup/common'
import styled, { lightTheme, darken } from '@slup/theming'

export const Bar = styled.div`
  box-shadow: ${SHADOW[4]};
  transition:
    max-height 150ms ${EASING['standard']},
        height 150ms ${EASING['standard']};
  height: 64px;
  max-height: ${props => props.maxHeight}px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.text || lightTheme.text};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : darken(0.02, props.theme.background || lightTheme.background)
  };
  position:   ${props => props.fixed || props.reveal
    ? 'fixed'
    : 'absolute'
  };
  right: 0;
  left: 0;
  z-index: 998;

  @media only screen and (max-width: 960px) {
    height: 56px;
  }
`