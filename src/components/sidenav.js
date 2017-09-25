import Inferno   from 'inferno'
import Component from 'inferno-component'

import { Sidenav } from '@slup/sidenav' 
import { List, ListItem } from '@slup/lists'



export class SideNav extends Component {
  state = { open: {} }

  list = [
    {
      title: 'Home',
      props: {
        onClick: () => this.context.router.push('/'),
      }
    },
    {
      title: <ListItem onClick={() => this.toggleList('components')}>Components</ListItem>, 
      name: 'components',
      props: { sublist: true },
      list: [
        { 
          title: 'Buttons', 
          props: { 
            onClick: () => this.context.router.push('/components/buttons'),
            nested: true
          }
        },
        {
          title: 'Controls',
          props: {
            onClick: () => this.navigate('/components/controls'),
            nested: true
          }
        },
        {
          title: 'Grid',
          props: {
            onClick: () => this.navigate('/components/grid'),
            nested: true
          }
        },
        {
          title: 'Lists',
          props: {
            onClick: () => this.navigate('/components/lists'),
            nested: true
          }
        }, 
        {
          title: 'Navbar',
          props: {
            onClick: () => this.navigate('/components/navbar'),
            nested: true
          }
        },
        {
          title: 'Ripple',
          props: {
            onClick: () => this.navigate('/components/ripple'),
            nested: true
          }
        },
        {
          title: 'sidenav',
          props: {
            onClick: () => this.navigate('/components/sidenav'),
            nested: true
          }
        },
        {
          title: 'Slider',
          props: {
            onClick: () => this.navigate('/components/slider'),
            nested: true
          }
        },
      ]
    }
  ]

  /**
   * 
   */
  toggleList(list) {
    // Invert
    this.state.open[list] = !this.state.open[list]

    this.setState({ open: this.state.open })
  }

  /**
   * Redirects to a specific route
   * 
   * @param {string} route to be redirected to
   */
  navigate(route) {
    this.context.router.push(route)
  }

  renderList(list) {
    return(
      <List>
        {list.map(child => this.renderItem(child))}
      </List>
    )
  }

  renderItem({ props, title, list, name }) {

    if(props.sublist) {
      // Check if the sublist is active
      props.visible = this.state.open[name]
    }

    return(
      <ListItem {...props}>
        {title}
        {list && this.renderList(list)}
      </ListItem>
    )
  }

  render = (props) => 
    <Sidenav {...props}>
      {this.renderList(this.list)}
    </Sidenav>

}