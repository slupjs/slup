import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  flex: 1;
  min-height: ${props => props.twoline ? '72px' : props.threeline ? '88px' : '48px'};
  max-height: 88px;
  position: relative;
  transition: background 150ms linear;
  &:hover {
    cursor: ${props => props.hoverable ? 'pointer' : 'text'};
    background: ${props => props.hoverable ? 'rgba(158,158,158,0.2)' : 'transparent'};
  }
`
