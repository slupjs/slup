import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  overflow: hidden;
  transition: max-height 250ms linear;
`

export class List extends Component {
  render(props) {
    return <Ul {...props} />
  }
}
