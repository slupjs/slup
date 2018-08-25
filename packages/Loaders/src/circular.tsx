import styled, { lightTheme, css } from '@slup/theming'
import { Rotate, ChangeDash } from './keyframes'

const Container = styled.div`
  position: relative;
  width: ${props => props.size || 48}px;
  transform: rotate(-90deg);

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
	
  ${props => props.value === undefined && css`
    animation: ${Rotate} 2s linear infinite;
  `}
`

const Path = styled.circle`
	stroke-dasharray: 100;
  fill: none;
  stroke-width: 4px;
  stroke-miterlimit: 20;
  stroke: ${props => props.secondary
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.primary || lightTheme.primary
  };
	
  ${props => props.value === undefined && css`
    animation: ${ChangeDash} 1.5s ease-in-out infinite;
  `}
`

export const CircularProgress = ({ size, value, secondary, ...otherProps }) => 
	<Container size={size} {...otherProps}>
		<Svg viewBox='25 25 50 50' value={value}>
      <Path cx='50' cy='50' r='20' pathLength='100'
        stroke-dashoffset={value !== undefined ? 100 - value + 'px' : 0}
        value={value}
        secondary={secondary}
      />
    </Svg>
  </Container>