import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

import { Container } from '../components/col'
import { CodeDisplay } from '../components/display'
import { BlockQuote } from '../components/quote'
import { RaisedButton, FlatButton, Fab } from '@slup/buttons'
import { Typography } from '@slup/typography'

export default class Buttons extends Component {
  render() {
    return(
      <Container>
        <Typography display3 style='padding: 32px 0'>Buttons</Typography>

        <BlockQuote>
          Material buttons trigger an ink reaction on press. They may display text, imagery, or both. <br />
          Flat buttons and raised buttons are the most commonly used types. <br />
          A floating action button is used for a promoted action. <br />
        </BlockQuote>

        <CodeDisplay
          name='All buttons'
          code={`
import {
  RaisedButton,
  FlatButton,
  Fab
} from '@slup/buttons'

export const Buttons = () =>
  <div>
    <RaisedButton>Button</RaisedButton>
    <FlatButton>Button</FlatButton>
    <Fab>+</Fab>
  </div>
          `}
          demo={[<RaisedButton>Button</RaisedButton>, <FlatButton>Button</FlatButton>, <Fab>+</Fab>]}
        />
        <CodeDisplay
          name='Color properties'
          code={`
import {
  RaisedButton,
  FlatButton,
  Fab
} from '@slup/buttons'

export const Buttons = () =>
  <div>
    <RaisedButton primary>Button</RaisedButton>
    <RaisedButton secondary>Button</RaisedButton>
    <FlatButton primary>Button</FlatButton>
    <FlatButton secondary>Button</FlatButton>
    <Fab secondary>+</Fab>
    <Fab primary>+</Fab>
  </div>
          `}
          demo={[
            <RaisedButton primary>Button</RaisedButton>,
            <RaisedButton secondary>Button</RaisedButton>,
            <FlatButton primary>Button</FlatButton>,
            <Fab secondary>+</Fab>,
            <Fab primary>+</Fab>
          ]}
        />
      </Container>
    )
  }
}
