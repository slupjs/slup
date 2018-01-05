<h1 align='center'>Slup - Card</h1>

This package contains the Card, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  A card is a sheet of material that serves as an entry point to more detailed information.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/card
```

## Usage
```js
import { Card }  from '@slup/card'

export const Test = props =>
  <Card>
    <YourContent>
  </Card>

```
We decided that making children components for this package wasn't needed since they are simple containers with some basic styling: the main problem is that they have too many little variations in styles and they can't be changed based on a solid criterion.
This isn't a big deal though, as shown in this full example, they can be created and used easily.
```js
import styled         from '@slup/theming'
import { Card }       from '@slup/card'
import { Typography } from '@slup/typography'
import { FlatButton } from '@slup/buttons'

const CardHeader = styled.div`
  padding: 24px 16px 16px 16px;
  
  p:first-child {
    padding-bottom: 16px;
  }

  p:last-child {
    font-size: 14px;
  }
`

const CardActions = styled.div`
  padding: 8px;

  button {
    padding: 0;
    margin: 0 8px 0 0;
  }
`

export const Test = props =>
  <Card style="width: 380px">
    <CardHeader>
      <Typography headline>Title goes here</Typography>
      <Typography caption>Subtitle here</Typography>
    </CardHeader>
    <CardActions>
      <FlatButton>Action</FlatButton>
      <FlatButton>Action</FlatButton>
    </CardActions>
  </Card>
```

## Available properties
| Props          |    Type       |    Default    | Documentation                |
|-------------   |:-------------:|:-------------:|------:                       |
| raised         |  boolean      |  false        | [Link](#property-raised)     |
| hoverable      |  boolean      |  false        | [Link](#property-hoverable)  |

#### Property: 'raised'
This property will increase the shadow of the `Card`
```js
<Card raised />
```

#### Property: 'hoverable'
This property will increase the shadow of the `Card` only when the cursor is over it
```js
<Card hoverable />
```