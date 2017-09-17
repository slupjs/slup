import styled from 'styled-components'

import { lightTheme } from '@slup/theming'
import { darken }     from 'polished'

export const Scroll = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  overflow-x: ${props => props.center ? 'hidden' : 'auto'};
  overflow-y: hidden;
  padding-bottom: ${props => props.translate && props.scrollable ? '15px' : null};
  transform: ${props => props.translate && props.scrollable ? 'translateY(15px)' : null};
  width: ${props => props.scrollable ? '100%' : 'auto'};
  left: ${props => props.scrollable ? '80px' : 'auto'};
  right: ${props => props.scrollable ? '80px' : 'auto'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };

  div:not(:last-child) {
    width: ${props => props.fit
      ? 'calc(100vw / ' + (props.children.length - 1) + ')'
      : 'auto'};
  }

  @media only screen and (max-width: 480px) {
    overflow-x: ${props => props.center ? 'hidden' : 'auto'};
    padding-bottom: 0;
    transform: translateY(0);
    left: ${props => props.scrollable ? '72px' : 'auto'};
    right: ${props => props.scrollable ? '72px' : 'auto'};
  }
`
