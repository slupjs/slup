import styled, { lightTheme } from '@slup/theming'

export const TransitionPages = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => `translateX(-${props.selected * 100}%)`}
`

export const Page = styled.div`
  flex-shrink: 0;
  height: 100%;
  width: 100%;
`
