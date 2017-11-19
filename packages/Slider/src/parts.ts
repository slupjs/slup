import styled, { lightTheme, rgba } from '@slup/theming'

/**
 * Helper function for elements that have the same
 * background color scheme
 *
 * @param  {IBaseProps} props The element's props
 * @return {string}     color The background color
 */
const commonBackground = props => props.value == 0
  ? props.theme.background || lightTheme.background
  : props.primary
    ? props.theme.primary || lightTheme.primary     /** With the primary prop */
    : props.theme.secondary || lightTheme.secondary /** Otherwise secondary by default */

/**
 * Helper function for elements
 * that have the same color as the line
 *
 * @param  {IBaseProps} props The element's props
 * @return {string}           The line color
 */
const lineColor = props => rgba(props.theme.text || lightTheme.text, .3)

/**
 * The container wich contains
 * the track and the thunb
 *
 * @type {JSX Element} The container element
 */
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  outline: none;
  height: 38px;
  width: 100%;
`

export const Line = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  background: ${lineColor};
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
  background: ${commonBackground}
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
  width:  ${props => props.focused ? 14 : 10}px;
  height: ${props => props.focused ? 14 : 10}px;

  background: ${commonBackground};
  border: ${props => props.value == 0 ? `2px solid` : 'none'};
  border-color: ${lineColor};

  box-shadow: ${props => props.focused && props.value == 0                        /** Value of the slider is 0 */
    ? `0 0 0 14px ${rgba(props.theme.text || lightTheme.text, 0.05)}`
    : props.focused && props.primary                                              /** Focused and primary props */
      ? `0 0 0 14px ${rgba(props.theme.primary || lightTheme.primary, .1)}`
      : props.focused                                                             /** Default color */
        ? `0 0 0 14px ${rgba(props.theme.secondary || lightTheme.secondary, .1)}`
        : 'none'
  };
`
