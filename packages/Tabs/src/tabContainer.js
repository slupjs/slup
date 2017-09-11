import Inferno from 'inferno'
import styled  from 'styled-components'

import { lightTheme } from '@slup/theming'

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
    ? props.theme.primary || lightTheme.primary
    : props.theme.background || lightTheme.background
  };
`
