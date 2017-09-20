import styled from 'styled-components'

import { lightTheme } from '@slup/theming'

export const Divider = styled.hr`
  height: 1px;
  opacity: 0.12;
  font-size: 0;
  border: 0;
  background: ${props => props.theme.text || lightTheme.text};
  margin-left: ${props => props.inset ? '72px' : '0'};
  width: ${props => props.inset ? 'calc(100% - 72px)' : 'auto'};
`
