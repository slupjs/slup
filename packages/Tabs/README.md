<h1 align='center'>Slup - Tabs</h1>

This package contains the Tabs, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/tabs
```

## Usage
```js
import { Tabs, Tab } from '@slup/tabs'

export class Test extends Component {
  tabs = [
    'item one',
    'item two',
    'item three'
  ]

  state = { selected: 0 }

  handleClick(i) {
    this.setState({ selected: i })
  }

  render() {
    return (
      <Tabs selected={this.state.selected}>
        {this.tabs.map((item, i) => {
          return (
            <Tab
              onClick={() => this.handleClick(i)}
              selected={this.state.selected === i}
            >
              {item}
            </Tab>
          )
        })}
      </Tabs>
    )
  }
}
```

#### Usage [TabIcon]
This example shows how to use the `TabIcon` component to put an icon in the tabs
```js
import { Tabs, Tab, TabIcon } from '@slup/tabs'

export class Home extends Component {
  tabs = [
    <RandomIcon />,
    <RandomIcon />,
    <RandomIcon />
  ]

  state = { selected: 0 }

  handleClick(i) {
    this.setState({ selected: i })
  }

  render() {
    return (
      <Tabs selected={this.state.selected}>
        {this.tabs.map((item, i) => {
          return (
            <Tab
              onClick={() => this.handleClick(i)}
              selected={this.state.selected === i}
            >
              <TabIcon>
                {item}
              </TabIcon>
            </Tab>
          )
        })}
      </Tabs>
    )
  }
}
```


## Available properties
| Props                   |    Type       |    Default    | Documentation                             |
|-------------            |:-------------:|:-------------:|------:                                    |
| selected                |  number       |  0            | [Link](#usage)                            |
| onClick                 |  function     |  none         | [Link](#usage)                            |
| center                  |  boolean      |  false        | [Link](#property-center-tabs)             |
| primary                 |  boolean      |  false        | [Link](#property-primary-tabs)            |
| secondaryIndicator      |  boolean      |  false        | [Link](#property-secondaryindicator-tabs) |
| scrollable              |  boolean      |  false        | [Link](#property-scrollable-tabs)         |
| fit                     |  boolean      |  false        | [Link](#property-fit-tabs)                |
| secondary               |  boolean      |  false        | [Link](#property-secondary-tab)           |

#### Property: 'selected'
This property has to be applied to the `Tabs` and to the `Tab` itself to choose which item should be selected by default

#### Property: 'onClick'
This property has to be applied to each `Tab` to make it be interactive

#### Property: 'center' [Tabs]
This property will center each tab
```js
<Tabs selected={this.state.selected} center></Tabs>
```

#### Property: 'primary' [Tabs]
This property will set the background of the tabs to be as the primary color of the theme
```js
<Tabs selected={this.state.selected} primary></Tabs>
```

#### Property: 'secondaryIndicator' [Tabs]
This property will set the background of the indicator to be as the secondary color of the theme
```js
<Tabs selected={this.state.selected} secondaryIndicator></Tabs>
```

#### Property: 'scrollable' [Tabs]
This property will makes the tabs scrollable by using two buttons instead of the normal scrollbar in a large viewport
but on mobile it will still be scrollable even without using buttons
```js
<Tabs selected={this.state.selected} scrollable></Tabs>
```

#### Property: 'fit' [Tabs]
This property will change the width of each item to fill the entire width of the viewport
```js
<Tabs selected={this.state.selected} fit></Tabs>
```

#### Property: 'secondary' [Tab]
This property will set the color of the selected item to be as the secondary color of the theme
```js
<Tab secondary></Tab>
```
