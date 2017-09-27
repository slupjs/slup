<demo gif>

<h1 align='center'>Slup - Grid</h1>

This package contains the Grid, a Utility Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Material design’s responsive UI is based on a 12-column grid layout. This grid creates visual consistency between layouts, while allowing flexibility across a wide variety of designs.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/grid
```

## Usage
```js
import { Grid, Col } from '@slup/grid'

export class Test extends Component {
  render() {
    return(
      <Grid>
        <Col sm={12} md={10} lg={6} xl={2}>
          <YourContent />
        </Col>
      </Grid>
    )
  }
}
```

## Available properties
| Props          |    Type       |    Default    | Documentation                       |
|-------------   |:-------------:|:-------------:|------:                              |
| center         |  boolean      |  false        | [Link](#property-center-grid)        |
| space_around   |  boolean      |  false        | [Link](#property-space_around-grid)  |
| space_between  |  boolean      |  false        | [Link](#property-space_between-grid) |
| end            |  boolean      |  false        | [Link](#property-end-grid)           |
| middle         |  boolean      |  false        | [Link](#property-middle-grid)        |
| bottom         |  boolean      |  false        | [Link](#property-bottom-grid)        |
| sm/md/lg/xl    |  number       |  0            | [Link](#property-sm--md--lg--xl-col) |
| offset         |  number       |  0            | [Link](#property-offset-col)         |
| pull           |  number       |  0            | [Link](#property-pull-col)           |
| hide           |  boolean      |  false        | [Link](#property-hide-col)           |
| show           |  boolean      |  false        | [Link](#property-show-col)           |

#### Property: 'center' [Grid]
This property will horizontally center the columns
```js
<Grid center>
  <Col sm={12} />
</Grid>
```

#### Property: 'space_around' [Grid]
This property will set space before, between, and after the columns
```js
<Grid space_around>
  <Col sm={12} />
</Grid>
```

#### Property: 'space_between' [Grid]
This property will set space between the columns
```js
<Grid space_between>
  <Col sm={12} />
</Grid>
```

#### Property: 'end' [Grid]
This property will horizontally set the columns to the end of the container
```js
<Grid end>
  <Col sm={12} />
</Grid>
```

#### Property: 'middle' [Grid]
This property will vertically center the columns
```js
<Grid middle>
  <Col sm={12} />
</Grid>
```

#### Property: 'bottom' [Grid]
This property will vertically set the columns to the end of the container
```js
<Grid bottom>
  <Col sm={12} />
</Grid>
```

#### Property: 'sm / md / lg / xl' [Col]
These properties will set the number of columns the `<Col />` should have, based on the device's viewport:

* `sm`: counts for the **small** viewport and up
* `md`: counts for the **medium** viewport and up
* `lg`: counts for the **large** viewport and up
* `xl`: counts for the **extra-large** viewport and up

```js
<Grid>
  <Col sm={12} md={6} lg={8} xl={3} />
</Grid>
```

#### Property: 'offset' [Col]
This property will offset the columns by using the pixels unit of measure
* offset counts for the **small** viewport and up
* offset_md counts for the **medium** viewport and up
* offset_lg counts for the **large** viewport and up
* offset_xl counts for the **extra-large** viewport and up

```js
<Grid>
  <Col sm={12} offset={320} offset_md={20} offset_lg={120} offset_xl={50} />
</Grid>
```

#### Property: 'pull' [Col]
This property will pull the columns by using the pixels unit of measure
* pull counts for the **small** viewport and up
* pull_md counts for the **medium** viewport and up
* pull_lg counts for the **large** viewport and up
* pull_xl counts for the **extra-large** viewport and up

```js
<Grid>
  <Col sm={12} pull={320} pull_md={20} pull_lg={120} pull_xl={50} />
</Grid>
```

#### Property: 'hide' [Col]
This property will hide the columns in various viewports
* hide_sm counts for the **small** viewport and up
* hide_md counts for the **medium** viewport and up
* hide_lg counts for the **large** viewport and up
* hide_xl counts for the **extra-large** viewport and up

```js
<Grid>
  <Col sm={12} hide_sm />
  <Col sm={12} hide_md />
  <Col sm={12} hide_lg />
  <Col sm={12} hide_xl />
</Grid>
```

#### Property: 'show' [Col]
This property will show the columns in various viewports, the difference with the 'hide' is that if this property is set for a certain viewport it will not count in the other ones

```js
<Grid>
  /* This makes the column visible ONLY on the medium viewport */
  <Col sm={12} hide_sm show_md />
</Grid>
```
