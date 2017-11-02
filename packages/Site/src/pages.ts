import { Props } from 'inferno'

export interface IRoute {
  url: string
  title: any
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
    ]
  }
]