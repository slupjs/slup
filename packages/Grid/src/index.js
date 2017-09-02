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
  : props.flex_end
    ? 'flex-end'
  : 'flex-start'};

  align-items: ${props => props.middle
  ? 'center'
  : props.end
    ? 'flex-end'
  : 'flex-start'};

  flex: 0 0 100%;
  height: auto;
`

export const Col = styled.div`
  box-sizing: border-box;
  height: auto;
  transition: margin 150ms linear;
  flex-basis: ${props => 100 / 12 * props.sm}%;
  margin-left: ${props => props.offset};
  margin-right: ${props => props.pull};

  @media only screen and (min-width: 600px) {
    flex-basis: ${props => 100 / 12 * (props.md || props.sm)}%;
    margin-left: ${props => props.offset_md || 0};
    margin-right: ${props => props.pull_md || 0};
  }

  @media only screen and (min-width: 960px) {
    flex-basis: ${props => 100 / 12 * (props.lg || props.sm)}%;
    margin-left: ${props => props.offset_lg || 0};
    margin-right: ${props => props.pull_lg || 0};
  }
`
