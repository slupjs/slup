import { Props } from 'inferno'
import { flatten } from './utils/flatten'

export interface IRoute {
  url: string
  title: string
  props?: Props
  list?: IRoute[]
}

export const Pages: IRoute[] = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Components',
    url: null,
    props: { sublist: true },
    list: [
      {
        title: 'Buttons',
        url: '/components/buttons',
        props: { nested: true }
      },
      {
        title: 'Card',
        url: '/components/card',
        props: { nested: true }
      },
      {
        title: 'Controls',
        url: '/components/controls',
        props: { nested: true }
      },
      {
        title: 'Grid',
        url: '/components/grid',
        props: { nested: true }
      },
      {
        title: 'Lists',
        url: '/components/lists',
        props: { nested: true }
      },
      {
        title: 'Navbar',
        url: '/components/navbar',
        props: { nested: true }
      }, 
      {
        title: 'Ripple',
        url: '/components/ripple',
        props: { nested: true }
      },
      {
        title: 'Sidenav',
        url: '/components/sidenav',
        props: { nested: true }
      },
      {
        title: 'Slider',
        url: '/components/slider',
        props: { nested: true }
      },
      {
        title: 'Tabs',
        url: '/components/tabs',
        props: { nested: true }
      },
      {
        title: 'Tooltip',
        url: '/components/tooltip',
        props: { nested: true }
      },
      {
        title: 'Typography',
        url: '/components/typography',
        props: { nested: true }
      },
    ]
  }
]

export const URLs: IRoute[] = flatten(Pages
  .slice()
  .map(item => item.list ? item.list : item))