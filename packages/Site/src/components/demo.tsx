import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from '@slup/theming'
import { Lexer } from 'marked'

import Monaco from '@slup/monaco'
import {
  Main,
  Typo,
  Blockquote,
  Container,
  Area
} from './editor'


interface IState {
  frames: string[],
  title: string,
  description: string
}

export class Demo extends Component<any, IState> {
  private monaco: any
  private url: string = 'https://api.github.com/repos/slupjs/slup/contents/packages/Controls/README.md'
  
  public state = {
    frames: [],
    title: '',
    description: ''
  }

  private removeHtmlTags = (string: string) => {
    return string
      .replace(/<[^>]*>/g, '')
      .replace(/\s{2,}/g, '')
      .trim()
  }
  
  private async loadReadme() {
    const res = await fetch(this.url)
    const json = await res.json()
    
    const lexer = new Lexer()
    const tokens = lexer.lex(atob(json.content))
    const title: string = tokens.filter(t => t.type === 'html')[1].text
    const description: string = tokens.filter(t => t.type === 'html')[2].text
    
    const frames = tokens
      .filter(t => t.type === 'code' && t.lang === 'js')
      .map(code => code.text)

    this.setState({
      frames,
      title: this.removeHtmlTags(title),
      description: this.removeHtmlTags(description)
    })
  }

  public componentDidMount() {
    this.loadReadme()
  }

  render() {
    const { frames, title, description } = this.state
    const options = {
      automaticLayout: true,
      minimap: { 
        enabled: false 
      }
    }
    return (
      <Main>
        <Typo display2>{title}</Typo>
        <Blockquote>{description}</Blockquote>
        {frames.map(code => {
          return(
            <Container>
              <Area>
                <Monaco
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