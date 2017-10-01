<h1 align='center'>Slup - Icons</h1>

This package contains the icons provided by Material Design which are part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Installation
**Note: you must have installed git to install the package**

This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/icons
```

## Usage
The icons are stored in a tree representing the [Google's Material Design Icons](https://github.com/google/material-design-icons) repo, and so they can be resolved as follows:

- Visit [Google's Material Design Icons website](https://material.io/icons)

- Find the icon you are interested in

- Resolve the name, composed by the `cateogry` and the `name` as follows:
![Resolve example](https://i.imgur.com/5A2KFB7.png)

- Import it as follows: 
```js
  import Icon from '@slup/icons/<category>/<name>'
```

### Example

```js
import Menu from '@slup/icons/navigation/menu'

export const MenuIcon = () =>
  <Menu />
```

## Building

**Note: This step requires you to have git installed**

Building is as simple as running one command:

```
yarn build
```

This command will execute the `install.js` script wich will fetch for all the icons types, and look for all the icons inside of each time. From these informations it will build a tree of compiled small icons files, representing the original set forked from the [Google's Material Design Icons](https://github.com/google/material-design-icons) repo, in a friendly, importable and [Inferno](https://infernojs.org/)-based package.
