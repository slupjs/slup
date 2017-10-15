import styled from '@slup/theming'

const sanitize = (value) => typeof value == 'number' ? value + 'px' : value

export const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
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
  height: 100%;
`

export const Col = styled.div`
  box-sizing: border-box;
  height: inherit;
  overflow: inherit;
  transition: padding 150ms linear;
  flex-basis: ${props => 100 / 12 * props.sm || 0}%;
  order: ${props => props.order || 'unset'};
  padding-left: ${props => sanitize(props.offset || 0)};
  padding-right: ${props => sanitize(props.pull || 0)};
  display: ${props => props.hide_sm && !props.show_sm ? 'none' : 'initial'};

  @media only screen and (min-width: 480px) {
    flex-basis: ${props => 100 / 12 * (props.md || props.sm || 0)}%;
    padding-left: ${props => sanitize(props.offset_md || 0)};
    padding-right: ${props => sanitize(props.pull_md || 0)};
    display: ${props => (props.hide_md || props.hide_sm) && !props.show_md
      ? 'none'
      : 'initial'
    };
  }

  @media only screen and (min-width: 960px) {
    flex-basis: ${props => 100 / 12 * (props.lg || props.sm || 0)}%;
    padding-left: ${props => sanitize(props.offset_lg || props.offset_md || 0)};
    padding-right: ${props => sanitize(props.pull_lg || props.pull_md || 0)};
    display: ${props => (props.hide_lg || props.hide_md || props.hide_sm) && !props.show_lg
      ? 'none'
      : 'initial'
    };
  }

  @media only screen and (min-width: 1280px) {
    flex-basis: ${props => 100 / 12 * (props.xl || props.sm || 0)}%;
    padding-left: ${props => sanitize(props.offset_xl || props.offset_lg || 0)};
    padding-right: ${props => sanitize(props.pull_xl || props.pull_lg || 0)};
    display: ${props => (props.hide_xl || props.hide_lg || props.hide_md || props.hide_sm) && !props.show_xl
      ? 'none'
      : 'initial'
    };
  }
`
