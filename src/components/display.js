import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { Navbar } from '@slup/navbar'
import { blue } from '@slup/theming'
import { Code } from './icons'
import { IconButton } from './iconButton'

/** Prism imports */
import { highlight, languages }  from 'prismjs/prism'
import jsx from 'prismjs/components/prism-jsx'
import styles  from '../hlTheme'

export const Card = styled.section`
  box-shadow: 
    0 3px 6px rgba(0,0,0,0.16), 
    0 3px 6px rgba(0,0,0,0.23);
  border-radius: 2px;
  margin: 32px 0;
`

export const NavBar = styled(Navbar)`
  position: relative;
  box-shadow: none;
`

export const Pre = styled.pre`
  padding: 0;
  margin: 0 16px;

  ${styles}
`

export const CodeBox = styled.div`
  max-height: ${props => props.open ? 350 : 0}px;
  overflow: auto;
  transition: max-height 150ms ease-in-out;
  border-bottom: 1px solid ${blue[500]};
`

export const Demo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export class CodeDisplay extends Component {
  state = { open: false }

  componentDidMount() {
    this.setState({ 
      parsed: highlight(this.props.code, languages.jsx, 'jsx') 
    })
  }

  @bind
  open() {
    this.setState({ open: !this.state.open })
  }

  render({ code, name, demo }) {
    const { open, parsed } = this.state

    return(
      <Card>
        <NavBar primary style={{ justifyContent: 'space-between' }}>
          {name}

          <IconButton onClick={this.open}>
            <Code style={{
              fill: 'white'
            }} />
          </IconButton>
        </NavBar>
        <CodeBox open={open}>
          <Pre>
            <code dangerouslySetInnerHTML={{ __html: parsed }}></code>
          </Pre>
        </CodeBox>
        <Demo>
          {demo}
        </Demo>
      </Card>
    )
  }
}