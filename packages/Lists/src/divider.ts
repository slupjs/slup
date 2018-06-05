import styled, { lightTheme } from '@slup/theming'

export const Divider = styled.hr`
  height: 1px;
  opacity: 0.12;
  font-size: 0;
  border: 0;
  background: ${props => props.theme.text || lightTheme.text};
  margin-left: ${props => props.nested ? '72px' : '0'};
  width: ${props => props.nested ? 'calc(100% - 72px)' : '100%'};
`
