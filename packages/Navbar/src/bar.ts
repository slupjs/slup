import styled, { lightTheme, darken } from '@slup/theming'

export const Bar = styled.div`
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition:
    max-height 150ms cubic-bezier(0.4, 0.0, 0.2, 1),
        height 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  height: 64px;
  max-height: ${props => props.maxHeight}px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${props => props.theme.text || lightTheme.text};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : darken(0.02, props.theme.background || lightTheme.background)
  };
  position:   ${props => props.fixed || props.reveal
    ? 'fixed'
    : 'absolute'
  };
  right: 0;
  left: 0;
  z-index: 998;

  @media only screen and (max-width: 960px) {
    height: 56px;
  }
`