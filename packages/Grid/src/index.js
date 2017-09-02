import styled from 'styled-components'

export const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.center
  ? 'center'
  : props.space_around
    ? 'space-around'
  : props.space_between
    ? 'space-between'
  : props.end
    ? 'flex-end'
  : 'flex-start'};

  align-items: ${props => props.middle
  ? 'center'
  : props.bottom
    ? 'flex-end'
  : 'flex-start'};

  flex: 0 0 100%;
  height: auto;
`

export const Col = styled.div`
  box-sizing: border-box;
  height: auto;
  transition: margin 150ms linear;
  flex-basis: ${props => 100 / 12 * props.sm || 0}%;
  margin-left: ${props => props.offset || 0};
  margin-right: ${props => props.pull || 0};

  @media only screen and (min-width: 600px) {
    flex-basis: ${props => 100 / 12 * (props.md || props.sm || 0)}%;
    margin-left: ${props => props.offset_md || 0};
    margin-right: ${props => props.pull_md || 0};
  }

  @media only screen and (min-width: 960px) {
    flex-basis: ${props => 100 / 12 * (props.lg || props.sm || 0)}%;
    margin-left: ${props => props.offset_lg || props.offset_md || 0};
    margin-right: ${props => props.pull_lg || props.pull_md || 0};
  }

  @media only screen and (min-width: 1280px) {
    flex-basis: ${props => 100 / 12 * (props.xl || props.sm || 0)}%;
    margin-left: ${props => props.offset_xl || props.offset_lg || 0};
    margin-right: ${props => props.pull_xl || props.pull_lg || 0};
  }
`
