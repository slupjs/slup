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
`

const Area = styled.div`
  height: 100%;
  width: 50%;
`

interface IState { frames: string[] }

export class Ed extends Component<any, any> {
  private area: HTMLTextAreaElement
  private url: string = 'https://api.github.com/repos/slupjs/slup/contents/packages/Buttons/README.md'
  public state = { frames: ['const value: string[] = [\'test\', \'blabla\']'] }
  
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

  private editorDidMount(editor) {
    console.log(editor)
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        {this.state.frames.map(code =>
          <div>
            <Area>
              <Editor editorDidMount={this.editorDidMount.bind(this)} value={code} theme='vs-dark' language='typescript' />
            </Area>
            <Area>{code}</Area> {/* TODO */}
          </div>
        )}
      </Container>
    )
  }
}