import styled from 'styled-components'

import { lightTheme } from '@slup/theming'

export const Indicator = styled.div`
  position: absolute;
  transition: width 150ms, left 150ms;
  height: 2px;
  bottom: ${props => props.translate ? '15px' : 0};
  background: ${props => props.secondaryIndicator
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.text || lightTheme.text
  };

  @media only screen and (max-width: 480px) {
    bottom: 0;
  }
`
