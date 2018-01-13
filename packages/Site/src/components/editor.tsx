import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from '@slup/theming'

import { Card } from '@slup/card'
import ArrowForward from '../../../Icons/icons/navigation/arrowForward'

import * as CodeMirror from 'codemirror'
import css from '../utils/codemirrorCSS'
import 'codemirror/mode/jsx/jsx'

const Container = styled(Card)`
  height: 50%;  
  width: 80%;
  margin: 0 auto;
  display: flex;
  position: relative;
  background: transparent;
  top: 50%;
  transform: translateY(-50%);

  @media all and (max-width: 960px) { width: 90% }

  @media all and (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
    height: 75%;
  }
`

const Area = styled.div`
  height: 100%;
  flex-basis: 50%;
  color: black;
  max-width: 50%;
  background: white;
  
  @media all and (max-width: 600px) {
    height: 50%;
    flex-basis: 100%;
    max-width: 100%;
  }
`

export class Editor extends Component<any, any> {
  private area: HTMLTextAreaElement
  private editor = null

  componentDidMount() {
    this.editor = CodeMirror.fromTextArea(this.area, {
      value: this.area.value,
      lineNumbers: true,
      mode: 'jsx',
      tabSize: 2
    })
  }

  render() {
    return(
      <Container>
        <Area>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <textarea ref={e => this.area = e} />
        </Area>
        <Area>
          Text
        </Area>
      </Container>
    )
  }
}