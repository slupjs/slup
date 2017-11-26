import styled, { lightTheme } from '@slup/theming'
import { DiscreteSlider } from './discrete'

export const Dots = styled.div`
  display: ${props => props.disabled ? 'none' : 'initial'};
  height: 3px;
  width: 100%;
  position: absolute;
  z-index: 2;
`

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  position: absolute;
  background: ${props => props.theme.text || lightTheme.text};
`

export class SteppedSlider extends DiscreteSlider {
  render({ steps, children, ...props }) {
    const dots = [<Dot style={{ left: '100%'  }} id={steps + 1} />]

    if(steps) {
      const stepValue = props.max / steps

      for (let i = 0; i < steps; i++) {
        dots.push(<Dot style={{ left: stepValue * i + '%'  }} id={i} />)
      }
    }

    return this.renderDiscrete({
      ...props,
      children: [
        ...children || [],
        <div style={{ width: '100%', height: 3 }}>
          {dots}
        </div>
      ]
    })
  }
}
