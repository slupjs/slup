import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class LeftContent extends Component {
  render({ children, avatar }) {

    const Div = styled.div`
      margin: ${avatar ? '8px 16px 8px 0' : '8px 32px 8px 0'};
    `

    return <Div>{children}</Div>
  }
}
