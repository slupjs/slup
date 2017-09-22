<demo gif>

<h1 align='center'>Slup - Slider</h1>

This package contains the Slider, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Sliders are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/slider
```

## Usage
```js
import { Slider } from '@slup/slider'

export class Test extends Component {
  state = {
    value: 0,
    total: 100
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <Slider
        onChange={this.handleChange.bind(this)}
        value={this.state.value}
        max={this.state.total}
      />
    )
  }
}
```

## Available properties
| Props       |    Type       |    Default       | Documentation          |
|-------------|:-------------:|:-------------:|------:                    |
| disabled    |  boolean      |  false      | [Link](#property-disabled)  |
| discrete    |  boolean      |  false      | [Link](#property-discrete)  |

#### Property: 'disabled'
This property will disable the slider
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={this.state.total}
  disabled
/>
```

#### Property: 'discrete'
This property will make a discrete slider which shows the value inside a thumb
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={this.state.total}
  discrete
/>
```
