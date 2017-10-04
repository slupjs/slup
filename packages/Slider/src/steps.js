import styled         from 'styled-components'

import { lightTheme } from '@slup/theming'

export const Dots = styled.div`
  display: ${props => props.discrete ? 'initial' : 'none'};
  height: 3px;
  width: 100%;
  position: absolute;
  z-index: 2;
`

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  position: absolute;
  background: ${props => props.theme.text || lightTheme.text};
`