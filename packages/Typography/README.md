<demo gif>

<h1 align='center'>Slup - Typography</h1>

This package contains the Typography, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/typography
```

## Usage
```js
import { Typography } from '@slup/typography'

export class Test extends Component {
  render() {
    return <Typography display4>Text</Typography>
  }
}
```

## Available properties
| Props                  |    Type       |    Default    | Documentation                |
|------------------------|:-------------:|:-------------:|-----------------------------:|
| display[1, 2, 3, 4]    |  boolean      |  false        | [Link](#property-display)    |
| headline               |  boolean      |  false        | [Link](#property-headline)   |
| title                  |  boolean      |  false        | [Link](#property-title)      |
| subheading             |  boolean      |  false        | [Link](#property-subheading) |
| body[1, 2]             |  boolean      |  false        | [Link](#property-body)       |
| caption                |  boolean      |  false        | [Link](#property-caption)    |
| button                 |  boolean      |  false        | [Link](#property-button)     |

#### Property: 'display'
This property will set the font to the biggest possible
* display4 = 112px light
* display3 = 56px regular
* display2 = 45px regular
* display1 = 34px regular

```js
<Typography display4>Text</Typography>
<Typography display3>Text</Typography>
<Typography display2>Text</Typography>
<Typography display1>Text</Typography>
```

#### Property: 'headline'
This property will set the text to look as a Headline
* headline: 24px regular

```js
<Typography headline>Text</Typography>
```

#### Property: 'title'
This property will set the text to look as a Title
* title: 20px medium

```js
<Typography title>Text</Typography>
```

#### Property: 'subheading'
This property will set the text to look as a Subheading
* subheading: 15px (16px on device) regular

```js
<Typography subheading>Text</Typography>
```

#### Property: 'body'
This is the type of text which is used in almost all projects
* body2: 13px (14px on device) medium
* body1: 13px (14px on device) regular

```js
<Typography body2>Text</Typography>
<Typography body1>Text</Typography>
```

#### Property: 'caption'
This property will set the text to look as a Caption
* subheading: 12px regular

```js
<Typography caption>Text</Typography>
```

#### Property: 'button'
This property will set the text to look as a Button
* subheading: 14px medium

```js
<Typography button>Text</Typography>
```
