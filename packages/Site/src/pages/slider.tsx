import { Slider } from '@slup/slider'
import Component from 'inferno-component'

export default class extends Component<any, any> {
  public state = {
    focused: false,
    value: 0
  }

  onFocus() {
    this.setState({ focused: true })
  }

  onBlur() {
    this.setState({ focused: false })
  }

  onChange(value) {
    this.setState({ value })
  }

  public render() {
    const { focused, value } = this.state

    return(
      <div style='padding: 0 32px;'>
        <Slider
          focused={focused}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onChange={this.onChange.bind(this)}
          max={100}
          value={value}
        />
      </div>
    )
  }
}
