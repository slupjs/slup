import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from '@slup/theming'

import { Card } from '@slup/card'
import ArrowForward from '../../../Icons/icons/navigation/arrowForward'

import * as Marked from 'marked'
import 'codemirror/mode/jsx/jsx'
import Editor from '@slup/monaco'


const Main = styled.div`
  height: 100%;
  overflow-x: hidden;
`

const Container = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
  }
`

const Area = styled.div`
  height: 100%;
  width: 50%;
  min-height: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

interface IState { frames: string[] }

export class Ed extends Component<any, IState> {
  private monaco: any
  private url: string = 'https://api.github.com/repos/slupjs/slup/contents/packages/Buttons/README.md'
  
  public state = { frames: [] }
  
  private async loadReadme() {
    const res = await fetch(this.url)
    const json = await res.json()
    
    const lexer = new Marked.Lexer()
    const tokens = lexer.lex(atob(json.content))
    const frames = tokens
      .filter(t => t.type === 'code' && t.lang === 'js')
      .map(code => code.text)

    this.setState({ frames })
  }

  public componentDidMount() {
    this.loadReadme()
  }

  render() {
    const { frames } = this.state
    const options = {
      automaticLayout: true,
      minimap: { 
        enabled: false 
      }
    }
    return (
      <Main>
        {frames.map(code => {
          return(
            <Container>
              <Area>
                <Editor
                  value={code}
                  theme='vs-dark'
                  language='javascript'
                  options={options}
                />
              </Area>
              <Area>
                {code} {/* TODO */}
              </Area>
            </Container>
          )
        })}
      </Main>
    )
  }
}