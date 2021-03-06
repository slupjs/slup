import { linkEvent, Component } from 'inferno'
import styled from '@slup/theming'
import { Card } from '@slup/card'

const Container = styled(Card)`
  display: flex;
  flex: 1;
  margin-bottom: 36px;
`

const IFrame = styled.iframe`
  flex: 1;
  width: 100%;
  border-radius: 2px;
  border: none;
`

export const URL = ''

export class Editor extends Component<{ id: string }, null> {
  private element: HTMLIFrameElement

  /**
   * Initialize the lozad observer on the iframe
   */
  public async componentDidMount() {
    if(document) {
      const lozad = await import('lozad')

      const instance = lozad(this.element as any)
      instance.observe()
    }
  }

  public render({ id }) {
    return(
      <Container raised>
        <IFrame src={URL + id} innerRef={e => this.element = e} />
      </Container>
    )
  }
}