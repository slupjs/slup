import styled, { lightTheme, rgba } from '@slup/theming'

const Track = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.secondary
		?	rgba(props.theme.secondary || lightTheme.secondary, .6)
		: rgba(props.theme.primary || lightTheme.primary, .6)
	};
`

const Indicator = styled.div`
  height: 100%;
  background: ${props => props.secondary
		? props.theme.secondary || lightTheme.secondary
		: props.theme.primary || lightTheme.primary
	};
`

export const LinearProgress = ({ secondary, value, ...otherProps }) =>
	<Track secondary={secondary} {...otherProps}>
		<Indicator
			style={{ width: value + '%' }}
			secondary={secondary}
		/>
  </Track>