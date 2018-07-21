import { Component, LinkedEvent } from 'inferno'
import styled from '@slup/theming'

import { IRoute }  from '../pages'
import { List, ListItem, NestedList, Divider } from '@slup/lists'
import { Sidenav } from '@slup/sidenav'
import { Logo }    from './icons'

const SidenavHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 112px;
  padding-top: 24px;

  hr {
    margin: 24px 0 8px 0;
  }

  svg {
    height: 80%;
    width: 80%;
  }

  svg path, svg line {
    animation: none;
    stroke-dashoffset: 0;
    stroke: ${props => props.theme.primary};
  }
`

export interface IProps {
  onClose: Function | LinkedEvent<any, Event>
  onRedirect: { event: Function, data: any }
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

    return props && props.sublist 
      ? <NestedList {..._props}>
          <ListItem onClick={() => this.toggleList(url)}>{title}</ListItem>

        {this.renderList(list)}
      </NestedList>
      
      : <ListItem onClick={() => this.redirect(url)} {..._props}>{title}</ListItem>
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
    /** If there's no url it means that the item is a sublist opener */
    if(!url) return
    
    this.context.router.history.push(url)
    const event = this.props.onRedirect
    if(event) event.event(event.data)
  }

  public render({ items, ...props }) {
    return(
      <Sidenav {...props}>
        <SidenavHeader>
          <Logo />
          <Divider />
        </SidenavHeader>
        {this.renderList(items)}
      </Sidenav>
    )
  }
}