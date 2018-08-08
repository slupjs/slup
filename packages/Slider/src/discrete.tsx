import { EASING } from '@slup/common'
import styled from '@slup/theming'
import { Slider } from './base'
import { commonBackground } from './parts'

export const Indicator = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${commonBackground};
  color: white;
  border-radius: 50%;
  font-size: 14px;
  user-select: none;
  height: 35px; width: 35px;
  transform-origin: left bottom;
  transition: transform 150ms ${EASING['standard']};
  transform:
    scale(${props => props.focused && props.value !== 0 ? 1 : 0})
    translateX(-50%)
  ;

  svg {
    position: absolute;
    bottom: -17px;
    transform: translateX(0.2px);
    fill: ${commonBackground};
  }
`

export const Svg = () =>
  <svg width='19' height='20'>
    <path
      d='m18.69389,0.08725c0,0 -18.69388,-0.08726 -18.69388,-0.08726c14.8807,12.48095 5.11525,19.81242 5.11525,19.81242c0,0 7.99836,-0.0873 7.99836,-0.0873c0,0 -9.30043,-8.81519 5.58027,-19.63786z'
    />
  </svg>

export const DiscreteSlider = (props) => <Slider discrete {...props} />