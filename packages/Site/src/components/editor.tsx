import { linkEvent } from 'inferno'
import Component from 'inferno-component'
import lozad from 'lozad'
import styled from '@slup/theming'
import { Card } from '@slup/card'

export const Container = styled(Card)`
  height: 500px;
  display: flex;
  margin-bottom: 32px;
  color: black;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const IFrame = styled.iframe`
  width: 100%;
  height: 100%;

  border-radius: 2px;
  border: none;
`

export const URL = ''

export class Editor extends Component<{ id: string }, null> {
  private element: HTMLIFrameElement

  /**
   * Initialize the lozad observer on the iframe
   */
  public componentDidMount() {
    const instance = lozad(this.element as any)
    instance.observe()
  }

  public render({ id }) {
    return(
      <Container raised>
        <IFrame src={URL + id} innerRef={e => this.element = e} />
      </Container>
    )
  }
}