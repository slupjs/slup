import Component from 'inferno-component'
import { Sidenav } from '@slup/sidenav'
import { List, ListItem } from '@slup/lists'
import { IRoute } from '../pages'

export interface IProps {
  onClose: Function
  items: IRoute[]
  opened: boolean
}

export class Navigation extends Component<IProps, any> {
  public state = { open: {} }

  /**
   * Renders the list inside the sidenav. Looping trough all the children
   * 
   * @param routes List of routes
   */
  private renderList(routes: IRoute[]) {
    return <List>{routes.map(item => this.renderItem(item))}</List>
  }

  /**
   * Renders each item and loops for sublists
   * 
   * @param route Route element
   */
  private renderItem({ title, url, props, list }: IRoute) {
    const _props = props

    /** Declare if the sublist should be visible */
    if(props && props.sublist) _props.visible = !!this.state.open[url]

    return(
      <ListItem onClick={() => this.redirect(url)} {..._props}>
        {props && props.sublist
          /** 
           * If it's a sublist, the text should be wrapped 
           * as an item that triggers the visibility 
           */
          ? <ListItem onClick={() => this.toggleList(url)}>{title}</ListItem>

          /** Otherwise just render the title */
          : title
        }

        {list && this.renderList(list)}
      </ListItem>
    )
  }
  
  /**
   * Toggles between open and close state for any sublist
   * 
   * @param url The url(used as an index) to toggle the list
   */
  private toggleList(url: string) {
    this.state.open[url] = !this.state.open[url]

    this.setState({ open: this.state.open })
  }

  /**
   * Redirect the page to the given url
   * 
   * @param url The new url
   */
  private redirect(url: string) {
    if(url) this.context.router.push(url)
  }

  public render({ items, ...props }) {
    return(
      <Sidenav {...props}>
        {this.renderList(items)}
      </Sidenav>
    )
  }
}