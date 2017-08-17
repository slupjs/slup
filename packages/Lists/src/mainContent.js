import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class MainContent extends Component {
  render({ children }) {

    const Div = styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
    `

    return <Div>{children}</Div>
  }
}
