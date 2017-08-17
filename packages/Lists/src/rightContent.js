import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class RightContent extends Component {
  render({ children }) {

    const Div = styled.div`
      margin: 8px 0 8px 16px;
    `

    return <Div>{children}</Div>
  }
}
