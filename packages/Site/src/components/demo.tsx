import Inferno          from 'inferno'
import Component        from 'inferno-component'
import styled, { rgba } from '@slup/theming'
import * as marked      from 'marked'
import { Typography }   from '@slup/typography'
import { Divider }      from '@slup/lists'

import { Editor }   from './editor'
import { Evaluate } from './evaluate'

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

  p {
    margin: 4px 0;
  }
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

const Main = styled.div`
  height: 100%;
  overflow-x: hidden;
`

const Box = styled.div`
  height: 70%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-of-type {
    color: ${props => props.theme.primary};
    margin: 24px 0;
  }
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

const isCode = token => token.type === 'code' && token.lang === 'js'
const removeHtmlTags = (string: string) => {
  return string
    .replace(/<[^>]*>/g, '')
    .replace(/\s{2,}/g, '')
    .trim()
}


interface IState {
  frames: string[],
  title: string,
  blockquote: string
}

export class Demo extends Component<any, IState> {
  private url: string = 'https://api.github.com/repos/slupjs/slup/contents/packages/Controls/README.md'

  public state = {
    frames: [],
    title: '',
    blockquote: ''
  }

  private async loadReadme() {
    const res = await fetch(this.url)
    const json = await res.json()

    const lexer = new marked.Lexer()
    const tokens = lexer.lex(atob(json.content))

    const title: string = tokens
      .filter(t => t.type === 'html')[1].text
      .replace('Slup -', '')

    const blockquote: string = tokens
      .filter(t => t.type === 'html')[2].text
      .replace('<blockquote>', '').replace('</blockquote>', '')
      .split('<br />')
      .join('')
      .trim()

    const frames = tokens
      .reduce((prev, item, index) => {
        const paragraph = tokens[index + 1] || {}
        const code = tokens[index + 2] || {}

        if (
          item.type === 'heading' &&
          (item.depth === 2 || item.depth === 4) &&
          (isCode(paragraph) || isCode(code))
        ) {

          return [
            ...prev,
            {
              title: item.text,
              comment: isCode(code) && marked(paragraph.text),
              code: isCode(paragraph) ? paragraph.text : code.text
            }
          ]
        }

        return prev
      }, [])
      .filter(Boolean)

    this.setState({
      frames,
      title: removeHtmlTags(title),
      blockquote: blockquote
    })
  }

  public componentDidMount() {
    this.loadReadme()
  }

  render() {
    const { frames, title, blockquote } = this.state

    return (
      <Main>
        <Typo display2>Slup <Dot>•</Dot> {title}</Typo>
        <Blockquote>{blockquote}</Blockquote>
        {frames.map(frame => {
          return (
            <Box>
              <Divider style={{ width: '100%' }} />
              <Typography headline>{frame.title}</Typography>
              {frame.comment
                ? <Typography
                    subheading
                    style={{ marginBottom: 32, lineHeight: 1.5 }}
                    dangerouslySetInnerHTML={{
                      __html: frame.comment.replace('<p>', '').replace('</p>', '')
                    }}
                  />
                : null
              }
              <Editor code={frame.code} />
            </Box>
          )
        }
        )}
      </Main>
    )
  }
}