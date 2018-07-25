import { EASING } from '@slup/common'
import styled, { lightTheme } from '@slup/theming'
import { Slider } from './base'
import { Thumb } from './parts'

const commonBackground = props => props.value === 0
  ? props.theme.text || lightTheme.text
  : props.theme.secondary || lightTheme.secondary

export const TThumb = styled(Thumb)`
  transform: scale(${props => props.focused ? 0 : 1}) translate(-50%, -50%);
  pointer-events: none;
`

export const Indicator = styled.div`
  position: absolute;
  bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.value === 0 ? '.3' : '1'};
  background: ${commonBackground};
  color: ${props => props.value === 0
    ? props.theme.background || lightTheme.background
    : 'white'
  };
  border-radius: 50%;
  font-size: 12px;
  user-select: none;
  height: 30px; width: 30px;
  transform-origin: bottom;
  transition: transform 300ms ${EASING['standard']}, background 150ms;
  transform: scale(${props => props.focused ? 1 : 0}) translateX(-50%);

  &::before   {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -6.2px;
    width: 0; height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${commonBackground};
  }
`

export class DiscreteSlider extends Slider {
  renderDiscrete(props) {
    return this.baseRender({
      ...props,
      CustomThumb: (__props) =>
        <div>
          <TThumb {...__props} />
          <Indicator {...__props} value={props.value}>
            {Math.floor(props.value)}
          </Indicator>
        </div>
    })
  }

  render(props) {
    return this.renderDiscrete(props)
  }
}
