import styled from '@slup/theming'

export const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  flex: 0 0 100%;
  height: 100%;
  justify-content: ${props =>
    props.center
      ? 'center' /** If we use `props.center` */
      : props.space_around
        ? 'space-around' /** If we use `props.space_arround` */
        : props.space_between
          ? 'space-between'  /** If we use `props.space_between` */
          : props.end
            ? 'flex-end' /** If we use `props.end` */
            : 'flex-start'  /** Fallback */
  };

  align-items: ${props => props.middle
    ? 'center'  /** If we use `props.middle` */
    : props.bottom
      ? 'flex-end' /** If we use `props.bottom` */
      : 'flex-start' /** Fallback */
  };
`
