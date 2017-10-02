import styled         from 'styled-components'
import { lightTheme } from '@slup/theming'

export const ProgressBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100000000;

  height: 2px;
  width: ${props => props.progress}%;
  background: ${props => props.theme.text || lightTheme.text};
  opacity: ${props => props.progress !== 100 ? 1 : 0};
  transition: opacity, width 300ms linear, width 350ms linear
`