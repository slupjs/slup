import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'
import { bind, debounce } from 'decko'

import { FlatButton } from '@slup/buttons'
import { Logo } from '../components/logo'

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export class Home extends Component {
  @bind
  @debounce(300)
  handleClick() {
    this.context.router.push('/components/buttons')
  }

  render() {
    return (
      <LogoContainer>
        {Logo}
        <FlatButton onClick={this.handleClick}>Get started</FlatButton>
      </LogoContainer>
    )
  }
}
