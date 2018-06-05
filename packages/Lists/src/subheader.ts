import styled, { lightTheme } from '@slup/theming'

export const Subheader = styled.li`
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  font-size: 14px;
  padding-left: ${props => props.inset ? '72px' : '16px'};
  color: ${props => props.primary
    ? props.theme.primary || lightTheme.primary
    : props.theme.text || lightTheme.text
  };
`
