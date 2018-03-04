import { linkEvent } from 'inferno'
import Component from 'inferno-component'
import styled from '@slup/theming'
import { Card } from '@slup/card'
import Monaco from '@slup/monaco'

import { Evaluate } from './evaluate'

export const Container = styled(Card)`
  height: 70%;
  display: flex;
  margin-bottom: 32px;
  color: black;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Area = styled.div`
  height: 100%;
  width: 50%;
  min-height: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

interface IProps {
  code: string
}

interface IState { code: string }

export class Editor extends Component<IProps, IState> {
  constructor(props, state) {
    super(props, state)

    this.state = { code: props.code }
  }

  private handleChange(editor, code) {
    this.setState({ code })
  }

  render() {
    const options = {
      automaticLayout: true,
      minimap: {
        enabled: false
      }
    }

    return(
      <Container raised>
        <Area>
          <Monaco
            value={this.state.code}
            onChange={this.handleChange.bind(this)}
            theme='vs-dark'
            language='javascript'
            options={options}
          />
        </Area>
        <Area>
          <Evaluate code={this.state.code} />
        </Area>
      </Container>
    )
  }
}