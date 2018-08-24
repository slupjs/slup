import { keyframes } from '@slup/theming'

export const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const ChangeDash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -10px;
  }
  100% {
    stroke-dasharray: 89, 200;
  	stroke-dashoffset: -100px;
  }
`

/* The keyframes used for the linear progress were taken from 
 * https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/_keyframes.scss
*/

export const FirstTranslate = keyframes`
  0% {
    transform: translateX(0);
  }

  20% {
    animation-timing-function: cubic-bezier(.5, 0, .701732, .495819);
    transform: translateX(0);
  }

  59.15% {
    animation-timing-function: cubic-bezier(.302435, .381352, .55, .956352);
    transform: translateX(83.67142%);
  }

  100% {
    transform: translateX(200.611057%);
  }
`

export const FirstScale = keyframes`
	0% {
    transform: scaleX(.08);
  }

  36.65% {
    animation-timing-function: cubic-bezier(.334731, .12482, .785844, 1);
    transform: scaleX(.08);
  }

  69.15% {
    animation-timing-function: cubic-bezier(.06, .11, .6, 1);
    transform: scaleX(.661479);
  }

  100% {
    transform: scaleX(.08);
  }
`

export const SecondScale = keyframes`
	0% {
    animation-timing-function: cubic-bezier(.205028, .057051, .57661, .453971);
    transform: scaleX(.08);
  }

  19.15% {
    animation-timing-function: cubic-bezier(.152313, .196432, .648374, 1.004315);
    transform: scaleX(.457104);
  }

  44.15% {
    animation-timing-function: cubic-bezier(.257759, -.003163, .211762, 1.38179);
    transform: scaleX(.72796);
  }

  100% {
    transform: scaleX(.08);
  }
`

export const SecondTranslate = keyframes`
  0% {
    animation-timing-function: cubic-bezier(.15, 0, .515058, .409685);
    transform: translateX(0);
  }

  25% {
    animation-timing-function: cubic-bezier(.31033, .284058, .8, .733712);
    transform: translateX(37.651913%);
  }

  48.35% {
    animation-timing-function: cubic-bezier(.4, .627035, .6, .902026);
    transform: translateX(84.386165%);
  }

  100% {
    transform: translateX(160.277782%);
  }
`