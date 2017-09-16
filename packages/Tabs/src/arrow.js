import Inferno from 'inferno'
import styled  from 'styled-components'

import { lightTheme } from '@slup/theming'
import { Ripple }     from '@slup/ripple'

const ArrowSVG = (props) =>
  <svg width='24' viewBox='0 0 24 24' style={{transform: props.right ? 'rotate(180deg)' : null}}>
    <path d='M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' />
  </svg>

const Container = styled.div`
  /** Values */
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  cursor: pointer;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;

  /** Sizes */
  width: 56px;
  min-height: 48px;
  z-index: 2;

  /** Reactive values */
  fill:  ${props => props.theme.text || lightTheme.text};
  right: ${props => props.right ? 0 : null};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };
`

export const Arrow = (props) =>
  <Container {...props}>
    <ArrowSVG {...props} />
    <Ripple />
  </Container>
