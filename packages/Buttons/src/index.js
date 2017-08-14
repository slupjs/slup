import Inferno   from 'inferno'
import Component from 'inferno-component'
import { bind }  from 'decko'

import { RaisedButton } from './raisedbutton'
import { FlatButton } from './flatbutton'
import { Fab } from './fab'

export class Buttons extends Component {
  render() {
    return (
      <div>
        <FlatButton color='black' text='Demo' />
        <RaisedButton backgroundColor='#3F51B5' text='Disagree' />
        <Fab mini={true} backgroundColor='#3F51B5' />
      </div>
    )
  }
}
