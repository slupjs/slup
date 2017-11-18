import styled, { lightTheme, rgba } from '@slup/theming'

/**
 * Helper function for elements that have the same
 * background color scheme
 *
 * @param  {IBaseProps} props The element's props
 * @return {string}     color The backgrund color
 */
const commonBackground = props => props.primary
  ? props.theme.primary || lightTheme.primary /** With the primary prop */
  : props.theme.secondary || lightTheme.secondary /** Otherwise secondary by default */


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
  background: ${props =>
    rgba(props.theme.text || lightTheme.primary, .3)
  };
`

/**
 * The track element that displays the
 * current value of the slider
 *
 * @type {JSX Element} The track styled element
 * @prop {boolean} primary Weather the slider uses a primary color scheme
 */
export const Track = styled.div`
  height: 100%;
  background: ${commonBackground}
`

/**
 * The thumb elemtent shows the current value
 *
 * @type {JSX Element} The thumb styled element
 * @prop {boolean} focused Weather the slider is focused or not
 */
export const Thumb = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width:  ${props => props.focused ? 14 : 10}px;
  height: ${props => props.focused ? 14 : 10}px;

  background: ${commonBackground};
`
