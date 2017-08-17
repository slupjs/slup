import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class MainContent extends Component {
  render(props) {

    const Div = styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
    `

    return <Div>{props.children}</Div>
  }
}
