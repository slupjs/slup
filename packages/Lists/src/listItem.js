import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

import { LeftContent } from './leftContent'

export class ListItem extends Component {
  render(props) {
    const ListItem = styled.li`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      flex: 1;
      min-height: ${props.twoline ? '72px' : props.threeline ? '88px' : '48px'};
      max-height: 88px;
      position: relative;
      &:hover {
        cursor: pointer;
        background-color: darken(#fff, 50%);
      }
    `
    return <ListItem twoline={props.twoline} threeline={props.threeline}>{props.children}</ListItem>
  }
}
