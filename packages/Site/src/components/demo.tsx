import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from '@slup/theming'
import { Lexer } from 'marked'
import {Typography } from '@slup/typography'

import { Editor } from './editor'
import { Evaluate } from './evaluate'

export const Typo = styled(Typography) `
  width: 80%;
  color: ${props => props.theme.text};
  margin: 24px auto;
  opacity: .87;
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Blockquote = styled.blockquote`
  width: 40%;
  margin: 0 auto;
  transform: translateX(-45%);
  padding-left: 2%;
  border-left: 4px solid ${props => props.theme.secondary};
  opacity: 0.87;
  
  @media (max-width: 700px) {
    width: 90%;
    transform: translateX(0);
  }
`

export const Main = styled.div`
  height: 100%;
  overflow-x: hidden;
`

interface IState {
  frames: string[],
  title: string,
  description: string
}

export class Demo extends Component<any, IState> {
  private monaco: any
  private url: string = 'https://api.github.com/repos/slupjs/slup/contents/packages/Buttons/README.md'
  
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

    return (
      <Main>
        <Typo display2>{title}</Typo>
        <Blockquote>{description}</Blockquote>
        {frames.map(code => <Editor code={code} />)}
      </Main>
    )
  }
}