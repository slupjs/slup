import styled, { lightTheme, rgba, css } from '@slup/theming'
import {
	FirstTranslate,
	FirstScale,
	SecondTranslate,
	SecondScale
} from './keyframes'

const commonBackground = props => props.secondary
	? props.theme.secondary || lightTheme.secondary
	: props.theme.primary || lightTheme.primary

const Track = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.secondary
		?	rgba(props.theme.secondary || lightTheme.secondary, .6)
		: rgba(props.theme.primary || lightTheme.primary, .6)
	};
`

const Indicator = styled.div`
  position: relative;
  height: 100%;
  background: ${props => props.value === undefined ? 'transparent' : commonBackground};
`

const Bar = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: -54.888891%;

  animation: ${SecondTranslate} 2s infinite linear;

	div {
		position: absolute;
		height: 100%;
		width: 100%;
		background: ${commonBackground};
		animation: ${SecondScale} 2s infinite linear;
	}

	${props => props.first && css`
		left: -145.166611%;
		animation: ${FirstTranslate} 2s infinite linear;

		div {
			animation: ${FirstScale} 2s infinite linear;
		}
	`}
`

export const LinearProgress = ({ secondary, value, ...otherProps }) =>
	<Track secondary={secondary} {...otherProps}>
    <Indicator
      style={{ width: value !== undefined ? value + '%' : '100%' }}
      secondary={secondary}
			value={value}
    >
      {value !== undefined
        ? null
				: <Bar first secondary={secondary}><div /></Bar>
      }
      
      {value !== undefined
        ? null
				: <Bar secondary={secondary}><div /></Bar>
      }
    </Indicator>
  </Track>