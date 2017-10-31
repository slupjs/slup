import styled, { lightTheme } from '@slup/theming'

export const Subheader = styled.li`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: ${props => props.inset ? '72px' : '16px'};
  opacity: ${props => props.primary ? '1' : '0.54'};
  color: ${props => props.primary
    ? props.theme.primary || lightTheme.primary
    : props.theme.text || lightTheme.text};
`
