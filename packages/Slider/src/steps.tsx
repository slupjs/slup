import styled, { lightTheme } from '@slup/theming'

export const Dots = styled.div`
  display: ${props => props.disabled ? 'none' : 'initial'};
  height: 3px;
  width: 100%;
  position: absolute;
  z-index: 2;
`

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  position: absolute;
  background: ${props => props.theme.text || lightTheme.text};
`
