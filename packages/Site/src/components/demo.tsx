import Inferno          from 'inferno'
import Component        from 'inferno-component'
import styled, { rgba } from '@slup/theming'
import * as marked      from 'marked'
import { Typography }   from '@slup/typography'
import { Divider }      from '@slup/lists'

import { Editor }   from './editor'

const Typo = styled(Typography)`
  width: 80%;
  color: ${props => rgba(props.theme.primary, .87)};
  margin: 24px auto;

  &:after {
    content: '¬';
    padding-left: 10px;
    color: ${props => props.theme.secondary};
  }
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

const Dot = styled.span`
  color: ${props => props.theme.secondary}; 
`

const Blockquote = styled.blockquote`
  width: 80%;
  margin: 0 auto 32px auto;
  padding-left: 15px;
  white-space: pre-line;
  border-left: 4px solid ${props => rgba(props.theme.primary, .87)};
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

const Main = styled.div`
  height: 100%;
  overflow-x: hidden;
`

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    margin-bottom: 24px;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`

const Paragraph = styled(Typography)`
  color: ${props => props.body1 ? props.theme.text : props.theme.primary};
  margin-bottom: 24px;

  p {
    margin: 0;
  }
`

const isCode = (token: IAnyToken) =>
  token.type === 'code' &&
  token.lang === 'js' &&
  token.text.startsWith('// @code')

interface IState {
  frames: string[],
  title: string,
  blockquote: string
}

interface IToken<T> {
  type: T
  text?: string
  depth?: number
  lang?: string
}

interface ICodeToken extends IToken<'code'> {
  lang: string
}

type IAnyToken = IToken<any>
type IAnyTokenArray = IAnyToken[]
type IRawFrames = { id: number, item: IAnyToken }[]

export class Demo extends Component<{ module: string }, IState> {
  private getURL = mod => `https://api.github.com/repos/slupjs/slup/contents/packages/${mod}/README.md`

  public state = {
    frames: [],
    title: '',
    blockquote: ''
  }

  /**
   * Parses the Markdown string from github
   * 
   * @param raw THe raw markdown string
   */
  private parse(raw: string) {
    const frames = []
    const tokens: IAnyTokenArray = marked.lexer(raw)

    const title = this.getTitle(tokens)
    const blockquote = this.getBlockquote(tokens)

    const rawFrames: IRawFrames = tokens
      .map((item, id) => isCode(item) && { id, item })
      .filter(Boolean)

    rawFrames.forEach(item => {
      let i = item.id

      while (true) {
        const token = tokens[i]

        if (token.type === 'heading' && (token.depth === 2 || token.depth === 4)) {
          const t = tokens.slice(i + 1, item.id)

            // Dirty hack to make the parser work
            ; (t as any).links = {}

          const rendered = marked.parser(t)

          frames.push({
            title: marked(token.text),
            comment: rendered,
            code: item.item.text
          })

          break
        }

        i--
      }

    })

    return {
      frames,
      title,
      blockquote
    }
  }

  /**
   * Find the title in an array of tokens
   * 
   * @param tokens The array of tokens
   */
  private getTitle(tokens: IAnyTokenArray): string {
    const HTMLTokens: IToken<'html'>[] = tokens.filter(t => t.type === 'html')

    return HTMLTokens[1].text
      .replace('<h1 align=\'center\'>', '')
      .replace('</h1>', '')
      .replace('Slup -', '')
      .trim()
  }

  /**
   * Find the blockquote in an array of tokens
   * 
   * @param tokens The array of tokens
   */
  private getBlockquote(tokens: IAnyTokenArray) {
    const HTMLTokens: IToken<'html'>[] = tokens.filter(t => t.type === 'html')

    return HTMLTokens[2].text
      .replace('<blockquote>', '')
      .replace('</blockquote>', '')
      .split('<br />')
      .join('')
      .trim()
  }

  /**
   * Useful function that removes `p` tags
   * @param string The given string
   */
  private removeParagraph = (string: string) => 
    string.replace('<p>', '').replace('</p>', '')

  /**
   * Load the README and parse its contents
   */
  public async componentDidMount() {
    const res = await fetch(this.getURL(this.props.module))
    const json = await res.json()

    const parsed = this.parse(atob(json.content))

    this.setState(parsed)
  }

  render() {
    const { frames, title, blockquote } = this.state

    return (
      <Main>
        <Typo display2>Slup <Dot>•</Dot> {title}</Typo>
        <Blockquote>{blockquote}</Blockquote>
        {
          frames.map(frame => {
            return (
              <Box>
                <Divider />
                <Paragraph
                  headline
                  dangerouslySetInnerHTML={{ __html: this.removeParagraph(frame.title) }}
                />
                
                {frame.comment
                  ? <Paragraph
                      body1
                      dangerouslySetInnerHTML={{ __html: this.removeParagraph(frame.comment) }}
                    />
                  : null  
                }
                
                <Editor code={frame.code} />
              </Box>
            )
          })
        }
      </Main>
    )
  }
}