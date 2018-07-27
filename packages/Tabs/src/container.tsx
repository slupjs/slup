import { linkEvent, Component } from 'inferno'

import styled, { lightTheme, darken } from '@slup/theming'

import { Scroll }      from './scroll'
import { Indicator }   from './indicator'
import { Arrow }       from './arrow'

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
		? darken(0.02, props.theme.primary || lightTheme.primary)
		: props.theme.background || lightTheme.background
  };
`

interface IProps {
  selected: number
}

interface IState {
  style: Object,
  translate: boolean
}

export class Tabs extends Component<IProps, IState> {
  private id    = null
  private count = 0
  private scroll = null

  public state = { style: {}, translate: false }

  componentDidMount() {
    /**
     * Call the mount event as an update
     * in fact it's the "initial" update)
     */
    this.updateIndicator()

    // Listen for resized
    window.addEventListener('resize', this.updateIndicator.bind(this))

    if (this.isScrollable(this.scroll))
      this.setState({ translate: true })

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateIndicator.bind(this))
  }

  componentWillReceiveProps(newProps) {
    this.updateIndicator(newProps)
  }

  updateIndicator(newProps?: IProps) {
    /**
     * As selected may be undefined in the componentDidMount
     * event we prevent errors by taking the value
     * from the props as a fallback
     *
     * We check if the value is NOT a number, becuase
     * 0 is still an acceptable number but would be false
     * in an ipothetical if statement
     */
    const selected = !newProps
      ? 0
      : isNaN(newProps.selected)
        ? this.props.selected
        : newProps.selected

    const Tab = this.scroll.childNodes[selected]
    const { clientWidth: width, offsetLeft: left } = Tab

    this.scroll.parentElement.style.height = Tab.clientHeight + 'px'

    this.setState({ style: { left, width } })
  }

  moveScroll({ self, direction }) {
    let id: any = 0
    let count   = 0

    switch(direction) {
      case 'right':
        id = setInterval(() => {
          count++
          self.scroll.scrollLeft += 1

          if(count == 100) clearInterval(id)
        }, 0.03)
      break

      case 'left':
        id = setInterval(() => {
          count++
          self.scroll.scrollLeft -= 1

          if(count == 100) clearInterval(id)
        }, 0.03)
      break
    }
  }

  /**
   * This helper function checks if a given
   * element has a scrollable content or not.
   *
   * @param {HTMLElement} element
   */
  isScrollable(element) {
    // If the element is already scrolled
    if (element.scrollLeft !== 0) return true

    /**
     * Let's try to increase the scrolling,
     * if it doesn't work the element is
     * not scrollable
     */
    element.scrollLeft++

    if (element.scrollLeft === 0) {
      return false
    } else {
      element.scrollLeft--
      return true
    }
  }

  render(props) {
    const { translate, style } = this.state
    const { children, secondaryIndicator, scrollable } = props

    return (
      <Container {...props}>

        {/* Left scroll arrow */}
        {scrollable
          ? <Arrow onClick={linkEvent({ self: this, direction: 'left' }, this.moveScroll)} />
          : null
        }

        {/* Scroll container */}
        <Scroll
          {...props}
          childCount={props.children.length}
          innerRef={e => this.scroll = e}
          translate={translate}
          children={[
            ...children,
            <Indicator
              secondaryIndicator={secondaryIndicator}
              scrollable={scrollable}
              translate={translate}
              style={style}
            />
          ]}
        />

        {/* Right scroll arrow */}
        {scrollable
          ? <Arrow right onClick={linkEvent({ self: this, direction: 'right' }, this.moveScroll)} />
          : null
        }
      </Container>
    )
  }
}
