import styled, { lightTheme, rgba } from '@slup/theming'
import { Slider } from './base'

const Dots = styled.div`
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
`

const Dot = styled.span`
  height: 2px;
  width: 2px;
  border-radius: 50%;
  position: absolute;
`

const dotsBackground = (props, text, primary, secondary) => props.disabled
  ? rgba(text || lightTheme.text, 0.4)
  : props.primary
    ? primary || lightTheme.primary
    : secondary || lightTheme.secondary


export class SteppedSlider extends Slider {
  render(props) {
    const { primary, secondary, text, background } = this.context.__slup__.state
    
    const dots = []
    
    if (props.steps) {
			const stepValue = props.max / props.steps
      
			for (let i = 0; i < props.steps; i++) {
				dots.push(
					<Dot
            style={{
              left: stepValue * i + '%',
              transform: `translateX(-${stepValue * i}%)`,
              background: props.value >= (stepValue * i)
                ? rgba(background || lightTheme.background, .87)
                : dotsBackground(props, text, primary, secondary)
            }}
					/>
				)
			}

      dots.push(
        <Dot
          style={{
            left: '100%',
            transform: 'translateX(-100%)',
            background: props.value === props.max
              ? rgba(background || lightTheme.background, .87)
              : dotsBackground(props, text, primary, secondary)
          }}
        />
      )
		}

    return(
			<Slider
				discrete
				dots={
          <Dots>
						{dots}
          </Dots>
				}
				{...props}
			/>
    )
  }
}