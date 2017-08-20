import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

const Box = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  box-sizing: border-box;
  border: 2px solid ${props => props.clicked ? 'teal' : '#9e9e9e'};
  cursor: pointer;
  background-color: ${props => props.clicked ? 'teal' : 'none'};
  transition: background-color 300ms cubic-bezier(0.4, 0.0, 0.2, 1),
    border-color 150ms linear;
  outline: none;
  position: relative;
  &::before, &::after {
		content: '';
		background: #fff;
		height: 16px;
		width: 16px;
		position: absolute;
    top: -2px;
		left: -2px;
    opacity: ${props => props.clicked ? '1' : '0'};
		transform: translate(4px, 6px) rotate(44.91deg) scale(.1,.1);
		transform-origin: 0 0;
		transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1),
      opacity 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
	}
  &::after {
    transform: translate(4px, 6.5px) rotate(44.91deg) ${props => props.clicked ? 'scale(.3411,.1)' : 'scale(.1, .1)'}
	}
  &::before {
    transform: translate(6px, 10.5px) rotate(-45deg) ${props => props.clicked ? 'scale(.5612,.1)' : 'scale(.1, .1)'}
  }
`

export class Checkbox extends Component {
  state = { clicked: false }

  @bind
  handleClick() {
    this.setState({ clicked: !this.state.clicked })
  }

  render(props) {
    return <Box {...props} onClick={this.handleClick} clicked={this.state.clicked} />
  }
}
