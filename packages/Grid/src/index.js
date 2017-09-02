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
  margin-left: ${props => 100 / 12 * props.offset || null}%;
  margin-right: ${props => 100 / 12 * props.pull || null}%;

  @media only screen and (min-width: 600px) {
    flex-basis: ${props => 100 / 12 * props.md || null}%;
    margin-left: ${props => 100 / 12 * props.offset_md || null}%;
    margin-right: ${props => 100 / 12 * props.pull_md || null}%;
  }

  @media only screen and (min-width: 960px) {
    flex-basis: ${props => 100 / 12 * props.lg || null}%;
    margin-left: ${props => 100 / 12 * props.offset_lg || null}%;
    margin-right: ${props => 100 / 12 * props.pull_lg || null}%;
  }
`
