import { Ripple } from '@slup/ripple'
import styled, { lightTheme, rgba } from '@slup/theming'

export const Li = styled.li`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: background 150ms linear;
  flex: 1;
  flex-direction: row;
  padding: ${props => props.nested ? '0 16px 0 32px' : '0 16px' };
  min-height: ${props => props.twoline ? '72px'
    : props.threeline ? '88px'
    : '48px'
  };

  color: ${props => props.theme.text || lightTheme.text};
  user-select: ${props => props.hoverable ? 'none' : 'auto'};

  &:hover {
    cursor: ${props => props.hoverable === false ? 'text' : 'pointer'};
    background: ${props => props.hoverable === false 
      ? 'transparent'
      : rgba(props.theme.text || lightTheme.text, .15)
    };
  }
`

export const ListItem = (props) =>
  <Li  {...props}>
    {props.children}

    {props.ripple === false
      ? null
      : <Ripple {...props.rippleOptions} />
    }
  </Li>