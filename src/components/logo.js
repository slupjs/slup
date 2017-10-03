import Inferno from 'inferno'
import styled, { keyframes } from 'styled-components'

import { lightTheme } from '@slup/theming'

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const Path = styled.path`
  fill: none;
  stroke: ${props => props.theme.text || lightTheme.text};
  stroke-miterlimit: 10;
  stroke-width: 40;
  stroke-dasharray: 10000;
  stroke-dashoffset: 10000;
  animation: ${dash} 5s linear forwards;
`

const Line = Path.withComponent('line')

export const Logo = 
  <svg height="30%" viewBox="0 0 1636.71 805.1">
    <Path d="M967.46,523.76a153.65,153.65,0,1,0,153.65-153.65,153.65,153.65,0,1,1,153.65-153.65" transform="translate(-947.46 -41.85)"/>
    <Line x1="552.24" x2="552.24" y2="656.35"/>
    <Path d="M2256.87,847V523.76a153.65,153.65,0,1,1,153.65,153.65" transform="translate(-947.46 -41.85)"/>
    <Path d="M2033.46,698l-1.52-327.94V521.84a153.65,153.65,0,1,1-307.31,0V370.11" transform="translate(-947.46 -41.85)"/>
  </svg>
