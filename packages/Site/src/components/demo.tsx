import Inferno          from 'inferno'
import Component        from 'inferno-component'
import styled, { rgba } from '@slup/theming'
import { Lexer }        from 'marked'
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
  width: 40%;
  margin: 0 auto 48px auto;
  transform: translateX(-45%);
  padding-left: 2%;
  border-left: 4px solid ${props => props.theme.primary};
  opacity: 0.87;
  
  @media (max-width: 700px) {
    width: 90%;
    transform: translateX(0);
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
    margin: 32px 0;
  }
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

const isCode = token => token.type === 'code' && token.lang === 'js'

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

    const title: string = tokens
      .filter(t => t.type === 'html')[1].text
      .replace('Slup -', '')

    const blockquote: string = tokens.filter(t => t.type === 'html')[2].text
    
    const frames = tokens
      .reduce((prev, item, index)=> {
        const code = tokens[index + 1] || {}
        const paragraph = tokens[index + 2] || {}

        if(
          item.type === 'heading' && 
          (item.depth === 2 || item.depth === 4) &&
          (isCode(code) || isCode(paragraph))
        ) {

          return  [
            ...prev,
            {
              title: item.text,
              comment: isCode(paragraph) && code.text,
              code: isCode(code) ? code.text : paragraph.text
            }
          ]
        }

        return prev
      }, [])
      .filter(Boolean)

    this.setState({
      frames,
      title: this.removeHtmlTags(title),
      blockquote: this.removeHtmlTags(blockquote)
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
            return(
              <Box>
                <Divider style={{ width: '100%' }} />
                <Typography headline>{frame.title}</Typography>
                <Typography subheading>{frame.comment}</Typography>
                <Editor code={frame.code} />
              </Box>
            )
          }
        )}
      </Main>
    )
  }
}