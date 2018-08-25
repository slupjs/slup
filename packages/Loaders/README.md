<h1 align='center'>Slup - Loaders</h1>

This package contains the progress indicators, Material Design Components which are part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Progress indicators express an unspecified wait time or display the length of a process.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/loaders
```

## Usage
```js
import { Component } from 'inferno'
import { CircularProgress, LinearProgress } from '@slup/loaders'

export const Loaders = () =>
  <div>
    <CircularProgress />
    <LinearProgress />
  </div>
```

## Available properties
| Props          |    Type       |    Default    | Documentation                           |
|-------------   |:-------------:|:-------------:|------:                                  |
| value          |  number       |  0            | [Link](#property-value)                 |
| secondary      |  boolean      |  false        | [Link](#property-secondary)             |
| size           |  number       |  48           | [Link](#property-size-circularprogress) |

#### Property: 'value'
This property handles the changing value of the loader. It must be between 0 and 100.
<br />
If it is undefined, the loader becomes 'indeterminate'.
```js
<CircularProgress value={50} />
<LinearProgress value={100} />
```

#### Property: 'secondary'
This property sets the color of the loader as the secondary one of the theme.
```js
<CircularProgress secondary />
<LinearProgress secondary />
```

#### Property: 'size' [CircularProgress]
This property sets the size of the circle.
```js
<CircularProgress size={64} />
```