import Inferno from 'inferno'
import styled, { keyframes } from '@slup/theming'

/** The animation for out appearing logo */
const DASH: string = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const Path = styled.path`
  fill: none;
  stroke: ${props => props.theme.primary};
  stroke-miterlimit: 10;
  stroke-width: 40;
  stroke-dasharray: 10000;
  stroke-dashoffset: 10000;
  animation: ${DASH} 5s linear forwards;
`

const Line = Path.withComponent('line')
const PPath = styled.path`
  fill: ${props => props.theme.text}
`

export const Logo = (props) =>
  <svg {...props} height="30%" width="50%" viewBox="0 0 1636.71 805.1">
    <Path d="M967.46,523.76a153.65,153.65,0,1,0,153.65-153.65,153.65,153.65,0,1,1,153.65-153.65" transform="translate(-947.46 -41.85)" />
    <Line x1="552.24" x2="552.24" y2="656.35" />
    <Path d="M2256.87,847V523.76a153.65,153.65,0,1,1,153.65,153.65" transform="translate(-947.46 -41.85)" />
    <Path d="M2033.46,698l-1.52-327.94V521.84a153.65,153.65,0,1,1-307.31,0V370.11" transform="translate(-947.46 -41.85)" />
  </svg>

export const GitHub = (props) =>
  <svg viewBox='0 0 32.58 31.77' width='24' {...props}>
    <PPath fillRule='evenodd' d='M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z' />
  </svg>
