<demo gif>

<h1 align='center'>Slup - Controls</h1>

This package contains the Controls, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Checkboxes allow the selection of multiple options from a set.<br />
  Radio buttons allow the selection of a single option from a set.<br />
  Switches allow a selection to be turned on or off.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/controls
```

## Usage
This example includes the **checkbox**
```js
export class Test extends Component {
  state = {
    checked: false
  }

  handleChange() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <Checkbox
        onChange={this.handleChange.bind(this)}
        checked={this.state.checked}
      />
    )
  }
}
```

This example includes the **switch**
```js
export class Test extends Component {
  state = {
    checked: false
  }

  handleChange() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <Switch
        onChange={this.handleChange.bind(this)}
        checked={this.state.checked}
      />
    )
  }
}
```
This example includes the **radio**
```js
export class Test extends Component {
  state = {
    checked: 0
  }

  handleChange(i) {
    this.setState({ checked: i })
  }

  render() {
    return(
      <div>
        {[0, 1, 2].map(i =>
          <Radio
            onChange={e => this.handleChange.call(this, i)}
            checked={this.state.checked === i}
          />
        )}
      </div>
    )
  }
}
```


## Available properties
| Props                       |    Type       |    Default    | Documentation                          |
|-----------------------------|:-------------:|:-------------:|------:                                 |
| onChange                    |  function     |  none         | [Link](#usage)                         |
| checked                     |  boolean      |  false        | [Link](#usage)                         |
| disabled                    |  boolean      |  false        | [Link](#property-disabled)             |
| size                        |  number       |  16           | [Link](#property-size-checkbox-radio)  |
| leftLabel / rightLabel      |  string       |  undefined    | [Link](#property-leftlabel-rightlabel) |  

#### Property: 'disabled'
This property will disabled the controls
```js
<Checkbox disabled />
<Switch disabled />
<Radio disabled />
```

#### Property: 'size' [Checkbox, Radio]
With this property you can change the size of these two controls
```js
<Checkbox size={56} />
<Radio size={32} />
```

#### Property: 'leftLabel / rightLabel'
These properties will create a label which can contain a string.
<br />
If you want some text on the left use `leftLabel`.
<br />
If you want text on the right use `rightLabel`

```js
<Checkbox leftLabel='Text' rightLabel='Text' />
<Switch leftLabel='Text' rightLabel='Text' />
<Radio leftLabel='Text' rightLabel='Text' />
```
