import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'
import styled    from 'styled-components'

const Border = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: border 300ms linear;
  border: 2px solid ${props => props.checked ? 'teal' : '#9e9e9e'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Circle = styled.div`
  width: 12px;
  height: 12px;
  background: teal;
  border-radius: 50%;
  transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.checked ? 'scale(1)' : 'scale(0)'};
`

export class Radio extends Component {
  state = { checked: false }

  @bind
  handleClick() {
    const { checked } = this.state

    this.setState({ checked: !checked })
  }

  render(props) {
    return (
      <Border onClick={this.handleClick} checked={this.state.checked}>
        <Circle checked={this.state.checked} />
      </Border>
    )
  }
}
