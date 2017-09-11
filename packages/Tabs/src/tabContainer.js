import Inferno from 'inferno'
import styled  from 'styled-components'

import { lightTheme } from '@slup/theming'
import { darken }     from 'polished'

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : darken(0.02, props.theme.background || lightTheme.background)
  };
`
