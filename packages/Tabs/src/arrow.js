import Inferno from 'inferno'
import styled from 'styled-components'

import { Ripple } from '@slup/ripple'

const ArrowSVG = () =>
  <svg width='24' viewBox='0 0 24 24'>
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
  transform: ${props => props.right ? 'rotate(180deg)' : null};
  fill:  ${props => props.theme.text || lightTheme.text};
  right: ${props => props.right ? 0 : null};
`

export const Arrow = (props) => 
  <Container {...props}>
    <ArrowSVG {...props} />
    <Ripple />
  </Container>
