import styled, { lightTheme, rgba, lighten, css, darken } from '@slup/theming'

/**
 * Helper function for elements that have the same
 * background color scheme
 *
 * @param  {IBaseProps} props The element's props
 * @return {string}           The background color
 */
export const commonBackground = props => props.primary
  ? props.theme.primary || lightTheme.primary
  : props.theme.secondary || lightTheme.secondary


/**
 * Helper function for the thumb element
 * which sets the shadow
 *
 * @param  {number} spread 	The spread of the shadow
 * @param  {string} color   The color of the shadow
 * @param  {number} opacity The opacity of the shadow
 * @return {string}         The shadow
 */
const setShadow = (spread: number, color: string, opacity: number) =>
  `0 0 0 ${spread}px ${rgba(color, opacity)}`

/**
 * The container wich contains
 * the track and the thunb
 *
 * @type {JSX Element} The container element
 */
export const Container = styled.div`
  /**
   * Disables blue background on tap in mobile devices.
   * See:
   * - https://stackoverflow.com/a/29961714
   * - #32
   */
  -webkit-tap-highlight-color: transparent;

  position: relative;
  display: flex;
  align-items: center;
  outline: none;
  height: 38px;
  width: 100%;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? 'none' : 'unset'};

  &:active div:nth-child(2) {
    box-shadow: ${props => setShadow(24, commonBackground(props), .18)};
  }
`

export const Line = styled.div`
  height: 2px;
  width: 100%;
  position: absolute;
  background: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .14)
    : rgba(commonBackground(props), .24)
  };
`

/**
 * The track element that displays the
 * current value of the slider
 *
 * @type {JSX Element} The track styled element
 * @prop {boolean} primary Whether the slider uses a primary color scheme
 */
export const Track = styled.div`
  height: 100%;
  background: ${props => props.disabled
		? props.theme.dark
			? darken(.5, props.theme.text || lightTheme.text)
			: lighten(.5, props.theme.text || lightTheme.text)
		: commonBackground(props)
  };
`

/**
 * The thumb elemtent shows the current value
 *
 * @type {JSX Element} The thumb styled element
 * @prop {boolean} focused Whether the slider is focused or not
 */
export const Thumb = styled.div`
  position: relative;
  transition: box-shadow 150ms, background 150ms;
  border-radius: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width:  12px;
  height: 12px;
	background: ${commonBackground};
  

  ${props => props.disabled && css`
    width: 8px;
    height: 8px;
    background: ${props.theme.dark
			? darken(.5, props.theme.text || lightTheme.text)
			: lighten(.5, props.theme.text || lightTheme.text)
		};
    border: 4px solid ${props.theme.background || lightTheme.background};
  `}
	
  ${props => props.focused && css`
    box-shadow: ${setShadow(12, commonBackground(props), .12)};
  `}
  
	&:hover {
		box-shadow: ${props => setShadow(12, commonBackground(props), .15)};
	}
`
