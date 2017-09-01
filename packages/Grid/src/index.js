import styled from 'styled-components'

export const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 100%;
`

export const Col = styled.div`
  box-sizing: border-box;
  flex-basis: ${props => 100 / 12 * props.sm}%;

  @media only screen and (min-width: 600px) {
    flex-basis: ${props => 100 / 12 * props.md}%;
  }

  @media only screen and (min-width: 960px) {
    flex-basis: ${props => 100 / 12 * props.lg}%;
  }
`
