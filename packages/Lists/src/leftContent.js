import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export class LeftContent extends Component {
  render(props) {

    const Div = styled.div`
      margin: ${props.avatar ? '8px 16px 8px 0' : '0px 32px 0px 0'};
    `

    return <Div avatar={props.avatar}>{props.children}</Div>
  }
}
