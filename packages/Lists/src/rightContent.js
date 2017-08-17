import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class RightContent extends Component {
  render(props) {

    const Div = styled.div`
      margin-left: 16px;
    `

    return <Div>{props.children}</Div>
  }
}
