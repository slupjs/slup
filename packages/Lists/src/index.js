import styled from 'styled-components'

// Convergence file
export { List }         from './list'
export { ListItem }     from './listItem'
export { Divider }      from './divider'
export { Subheader }    from './subheader'
export { MainContent }  from './mainContent'

export const LeftContent = styled.div`
  margin: ${props => props.avatar ? '8px 16px 8px 0' : '0px 32px 0px 0'};
`

export const RightContent = styled.div`
  margin-left: 16px;
`
