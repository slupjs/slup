/**
 * This is a temporary file, until we have a proper
 * @slup/icons component that handles this function
 */

import Inferno from 'inferno'
import styled  from 'styled-components'

import { lightTheme } from '@slup/theming'

const Path = styled.path`
  fill: ${props => props.theme.text}
`

export const Menu = (props) =>
  <svg
    viewBox='0 0 24 24'
    width='24'
    {...props}>
    <Path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </svg>

export const GitHub = (props) =>
  <svg
    viewBox='0 0 32.58 31.77'
    width='24'
    {...props}>
    <Path fillRule='evenodd' d='M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z'/>
  </svg>


export const Code = (props) =>
  <svg
    viewBox='0 0 24 24'
    width='24'
    {...props}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>