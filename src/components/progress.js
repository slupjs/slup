import styled         from 'styled-components'
import { lightTheme } from '@slup/theming'

export const ProgressBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1001;

  height: 2px;
  width: ${props => props.progress}%;
  background: ${props => props.theme.text || lightTheme.text};
  opacity: ${props => props.progress !== 100 && props.display ? 1 : 0};
  transition: width 150ms  ease-in-out, opacity 200ms linear;
`