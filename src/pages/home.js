import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'
import { bind, debounce } from 'decko'

import { RaisedButton } from '@slup/buttons'
import { Slider } from '@slup/slider'
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
  state = { value: 0, focus: false }

  @bind
  onChange(value) {
    this.setState({ value })
  }

  @bind
  onFocus() {
    this.setState({ focus: true })
  }

  @bind
  onBlur() {
    console.log('called')
    this.setState({ focus: false })
  }

  @bind
  @debounce(300)
  handleClick() {
    this.context.router.push('/components/buttons')
  }

  render() {
    return (
      <LogoContainer>
        {Logo}
        <RaisedButton onClick={this.handleClick} primary>Get started</RaisedButton>
        <Slider
          value={this.state.value} 
          focus={this.state.focus}
          keyFocus={this.state.focus}
          max={100}
          onChange={this.onChange} 
          onFocus={this.onFocus} 
          onBlur={this.onBlur}
          discrete 
          steps={10} />
      </LogoContainer>
    )
  }
}
