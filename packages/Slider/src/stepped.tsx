import styled, { lightTheme } from '@slup/theming'
import { Slider } from './base'

export const Dots = styled.div`
  display: ${props => props.disabled ? 'none' : 'initial'};
  height: 2px;
  width: 100%;
  position: absolute;
  z-index: 2;
`

export const Dot = styled.div`
  height: 2px;
  width: 2px;
  border-radius: 50%;
  position: absolute;
  background: ${props => props.theme.text || lightTheme.text};
`

export class SteppedSlider extends Slider<any, any> {
  render(props) {
		const dots = [<Dot style={{ left: '100%', transform: 'translateX(-100%)' }} id={props.steps + 1} />]

		if (props.steps) {
			const stepValue = props.max / props.steps

			for (let i = 0; i < props.steps; i++) {
				dots.push(
					<Dot
						style={{ left: stepValue * i + '%', transform: `translateX(-${stepValue * i}%)` }}
						id={i}
					/>
				)
			}
		}

    return(
			<Slider
				discrete
				dots={
					<div style={{ width: '100%', height: 2 }}>
						{dots}
					</div>
				}
				{...props}
			/>
    )
  }
}