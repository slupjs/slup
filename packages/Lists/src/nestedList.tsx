import { Component } from 'inferno'

import { EASING } from '@slup/common'
import styled from '@slup/theming'
import { Li } from './listItem'

const Sublist = styled(Li)`
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  transition: ${props => props.clicked
    ? `height 300ms ${EASING['standard']}`
    : 'initial'
  };

  &:hover {
    cursor: text;
    background: transparent;
  }
`

interface IState {
  height: number
  clicked: boolean
}

export class NestedList extends Component<{ visible: boolean }, IState> {
  private list: HTMLLIElement

  state = { height: 0, clicked: false }

  componentDidMount() {
    this.setHeight()
  }

  private handleClick() {
    this.setHeight()
    this.setState({ clicked: true })
  }

  /**
   * Sets the height of the component to be the sum of the children's heights
   * or to be only the first one, depending on the visiblity of the list.
   */
  private setHeight = () => {
    const { visible } = this.props
    const children = this.list.children

    const childrenHeight = children[0].clientHeight + children[1].clientHeight

    if (visible) {
      this.setState({ height: childrenHeight })
    }
    else {
      this.setState({ height: children[0].clientHeight })
    }
  }

  render(props, { height, clicked }) {
    return (
      <Sublist
        innerRef={e => this.list = e}
        onClick={this.handleClick.bind(this)}
        clicked={clicked}
        style={{ height: height }}
        {...props}
      >
        {props.children}
      </Sublist>
    )
  }
}