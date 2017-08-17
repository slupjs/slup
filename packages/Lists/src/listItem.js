import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

import { LeftContent } from './leftContent'

export class ListItem extends Component {
  render({ children, twoline, threeline }) {
    const ListItem = styled.li`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      flex: 1;
      height: ${twoline ? '72px' : threeline ? '88px' : '48px'};
      max-height: 88px;
      position: relative;
    `
    return <ListItem>{children}</ListItem>
  }
}
