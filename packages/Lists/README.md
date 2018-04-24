<h1 align='center'>Slup - Lists</h1>

This package contains the Lists, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Lists are made up of a continuous column of rows.<br />
  Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/lists
```

## Usage
We have also added some utility components to add inside the `ListItem` which are: `LeftContent`, `MainContent` and `RightContent`
```js
import { List, ListItem } from '@slup/lists'

export class Test extends Component {
  render() {
    return(
      <List>
        <ListItem>
          <YourContent />
        </ListItem>
      </List>
    )
  }
}
```

#### Nested List
This example shows that lists can be nested
```js
export class Home extends Component {
  state = { visible: false }

  handleClick() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <List>
        <ListItem sublist visible={this.state.visible}>
          {/* This item will trigger the event */}
          <ListItem onClick={this.handleClick.bind(this)}>Trigger</ListItem>
          {/* This is the nested list */}
          <List>
            <ListItem>Nested</ListItem>
            <ListItem>Nested</ListItem>
            <ListItem>Nested</ListItem>
          </List>
        </ListItem>
      </List>
    )
  }
}
```

## Available properties
| Props          |    Type       |    Default    | Documentation                |
|-------------   |:-------------:|:-------------:|------:                       |
| ripple         |  boolean      |  true         | [Link](#property-ripple)     |
| twoline        |  boolean      |  false        | [Link](#property-twoline)    |
| threeline      |  boolean      |  false        | [Link](#property-threeline)  |
| hoverable      |  boolean      |  true         | [Link](#property-hoverable)  |
| sublist        |  boolean      |  false        | [Link](#property-sublist)    |
| nested         |  boolean      |  false        | [Link](#property-nested)     |
| avatar         |  boolean      |  false        | [Link](#property-avatar-leftcontent)     |

#### Property: 'ripple'
This property if set to false will remove the ripple effect from the `ListItem`
```js
<List>
  <ListItem ripple={false}>
    <YourContent />
  </ListItem>
</List>
```

#### Property: 'twoline'
This property will give more height to create a list with two lines of text
```js
import {
  List,
  ListItem,
  MainContent
} from '@slup/lists'

<List>
  <ListItem twoline>
    <MainContent>
      <h5 style={{margin: 0}}>Twoline</h5>
      <p style={{margin: 0, fontSize: 14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MainContent>
  </ListItem>
</List>
```

#### Property: 'threeline'
This property will give more height to create a list with three lines of text
```js
import {
  List,
  ListItem,
  MainContent
} from '@slup/lists'

<List>
  <ListItem threeline>
    <MainContent>
      <h5 style={{margin: 0}}>Twoline</h5>
      <p style={{margin: 0, fontSize: 14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p style={{margin: 0, fontSize: 14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </MainContent>
  </ListItem>
</List>
```

#### Property: 'hoverable'
This property if set to false will not change the `ListItem` background on hovering
```js
<List>
  <ListItem hoverable={false}>
    <YourContent />
  </ListItem>
</List>
```

#### Property: 'sublist'
Note: if you want a full example about triggering nested lists take a look at [this](#nested-list)
This property MUST be set to make a nested list
```js
<List>
  <ListItem sublist visible>
  <ListItem><SomeText /></ListItem>
    <List>
      <ListItem><YourContent /></ListItem>
    </List>
  </ListItem>
</List>
```

#### Property: 'nested'
This property will give some spacing on the left of the list

```js
<List>
  <ListItem sublist visible>
  <ListItem><SomeText /></ListItem>
    <List>
      <ListItem nested><YourContent /></ListItem>
    </List>
  </ListItem>
</List>
```

#### Property: 'avatar' [LeftContent]
This property will better spacing for an image such as a avatar icon
```js
import {
  List,
  ListItem,
  LeftContent,
  MainContent,
  RightContent
} from '@slup/lists'

<List>
  <ListItem>
    <LeftContent avatar>
      <img />
    </LeftContent>
    <MainContent>
      <YourContent />
    </MainContent>
    <RightContent>
      <Icon />
    </RightContent>
  </ListItem>
</List>
```
