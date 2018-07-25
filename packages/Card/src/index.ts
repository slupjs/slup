import styled, { css, lightTheme, rgba } from '@slup/theming'
import { SHADOW } from '@slup/common'

export const Card = styled.div`
  border-radius: 4px;
  background: white;
  box-shadow: ${props => props.raised ? SHADOW[8] : SHADOW[1]};

  ${props => props.hoverable && css`
    transition: box-shadow 300ms, border-color 300ms;
    box-shadow: ${SHADOW[0]};
    border: 1px solid ${rgba(props.theme.text || lightTheme.text, .12)};
  `}

  &:hover {
    box-shadow: ${props => props.hoverable || props.raised
      ? SHADOW[8]
      : SHADOW[1]
    };
    
    ${props => props.hoverable && css`
      border-color: transparent;
    `}
  }
`