import styled from '@slup/theming'

// Convergence file
export { ListItem }     from './listItem'
export { NestedList }   from './nestedList'
export { Divider }      from './divider'
export { Subheader }    from './subheader'

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const LeftContent = styled.div`
  margin: ${props => props.avatar ? '8px 16px 8px 0' : '0px 32px 0px 0'};
`

export const RightContent = styled.div`
  margin-left: 16px;
`
