import Inferno from 'inferno'
import Component from 'inferno-component'

import { RaisedButton } from '@slup/buttons'

export default class Buttons extends Component {
  render() {
    return(
      <div>
        <RaisedButton secondary>Test</RaisedButton> 
        <a>BUTTONSS</a>
      </div>
    )
  }
}