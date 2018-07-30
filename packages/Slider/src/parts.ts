import styled, { lightTheme, rgba } from '@slup/theming'

/**
 * Helper function for elements
 * that have the color of the line
 *
 * @param  {IBaseProps} props The element's props
 * @return {string}           The line color
 */
const lineColor = props => rgba(props.theme.text || lightTheme.text, .3)

/**
 * Helper function for elements that have the same
 * background color scheme
 *
 * @param  {IBaseProps} props The element's props
 * @return {string}     color The background color
 */
const commonBackground = props => props.disabled && props.value != 0
  ? props.theme.text || lightTheme.text
  : props.value == 0
    ? props.theme.background || lightTheme.background /** When the value is 0 */
    : props.primary
      ? props.theme.primary || lightTheme.primary     /** With the primary prop */
      : props.theme.secondary || lightTheme.secondary /** Otherwise secondary by default */


/**
 * Helper function for the thumb element
 * which sets the shadow
 *
 * @param  {string} color   The color of the shadow
 * @param  {number} opacity The opacity of the shadow
 * @return {string}         The shadow
 */
const setShadow = (color: string, opacity: number) => `0 0 0 14px ${rgba(color, opacity)}`

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
  opacity: ${props => props.disabled && props.value !== 0 ? .3 : 1};
`

export const Line = styled.div`
  height: 2px;
  width: 100%;
  position: absolute;
  background: ${props => props.disabled && props.value !== 0
    ? props.theme.text || lightTheme.text
    : lineColor
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
  opacity: ${props => props.disabled ? 0 : 1};
  background: ${commonBackground};
`

/**
 * The thumb elemtent shows the current value
 *
 * @type {JSX Element} The thumb styled element
 * @prop {boolean} focused Whether the slider is focused or not
 */
export const Thumb = styled.div`
  position: absolute;
  transition: width 200ms, height 200ms, box-shadow 300ms, background 150ms;
  border-radius: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width:  ${props => props.disabled ? 8 : 12}px;
  height: ${props => props.disabled ? 8 : 12}px;

  background: ${commonBackground};
  border: ${props => props.value === 0 || props.disabled ? `2px solid` : 'none'};
  border-color: ${props => props.disabled && props.value !== 0
    ? props.theme.background || lightTheme.background
    : lineColor
  };

  box-shadow: ${props => props.focused && props.value === 0                /** Value of the slider is 0 */
    ? setShadow(props.theme.text || lightTheme.text, 0.05)
    : props.focused && props.primary                                      /** Focused and primary props */
      ? setShadow(props.theme.primary || lightTheme.primary, 0.15)
      : props.focused                                                     /** Default color */
        ? setShadow(props.theme.secondary || lightTheme.secondary, 0.15)
        : 'none'
  };
`
