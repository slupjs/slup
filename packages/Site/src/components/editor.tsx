import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from '@slup/theming'

import { Card } from '@slup/card'
import ArrowForward from '../../../Icons/icons/navigation/arrowForward'

import * as Marked from 'marked'
import 'codemirror/mode/jsx/jsx'
import Editor from '@slup/monaco'


const Container = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Area = styled.div`
  height: 100%;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%
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

  public componentWillMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
  }
  
  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  private handleResize() {
    this.monaco.editor.layout()
  }

  render() {
    const { frames } = this.state
    return (
      <div style='height: 100%'>
        {frames.map(code => {
          return(
            <Container>
              <Area>
                <Editor
                  ref={e => this.monaco = e}
                  value={code}
                  theme='vs-dark'
                  language='javascript'
                />
              </Area>
              <Area>
                {code} {/* TODO */}
              </Area>
            </Container>
          )
        })}
      </div>
    )
  }
}