<h1 align='center'>Slup - Tooltip</h1>

This package contains the Tooltip, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Tooltips identify an element when they are activated.<br />
  They may contain brief helper text about its function.<br />
  For example, they may contain text information about actionable icons.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/tooltip
```

## Usage
```js
import Inferno from 'inferno'
import { Fab }     from '@slup/buttons'
import { Tooltip } from '@slup/tooltip'

export const Test = props =>
  <Tooltip text='Text'>
    <Fab>+</Fab>
  </Tooltip>
```

## Available properties
| Props          |    Type       |    Default    | Documentation                 |
|-------------   |:-------------:|:-------------:|------:                        |
| text           |  string       |  empty        | [Link](#property-text)  |
| delay          |  string       |  empty        | [Link](#property-delay) |
| location       |  string       |  bottom       | [Link](#property-location) |

#### Property: 'text'
The only required property of this component: here you can write the tip that will be shown.
```js
export const Test = props =>
  <Tooltip text='Log in'>
    <Icon />
  </Tooltip>
```

#### Property: 'delay'
This property will add the given delay to the transition.
```js
export const Test = props =>
  <Tooltip text='Log in' delay='100ms'>
    <Icon />
  </Tooltip>
```

#### Property: 'location'
This property will position the tip.
```js
export const Test = props =>
  <Tooltip text='Log in' location='top'>
    <Icon />
  </Tooltip>
```
There are many placements that you can choose:
* top-start
* top
* top-end
* right-start
* right
* right-end
* bottom-start
* bottom (**default**)
* bottom-end
* left-start
* left
* left-end
