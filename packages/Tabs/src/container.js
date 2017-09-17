import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind, debounce }  from 'decko'

import { lightTheme } from '@slup/theming'
import { darken }			from 'polished'

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


export class Tabs extends Component {
  id    = null
  count = 0
  state = { style: {}, translate: false }

  componentDidMount() {
    /**
     * Call the mount event as an update
     * in fact it's the "initial" update)
     */
    this.updateIndicator()

    // Listen for resized
    window.addEventListener('resize', this.updateIndicator)

    if (this.isScrollable(this.scroll))
      this.setState({ translate: true })

  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.updateIndicator)
  }

  componentWillReceiveProps = this.updateIndicator

  @bind
  updateIndicator(newProps = {}) {
    /**
     * As selected may be undefined in the componentDidMount
     * event we prevent errors by taking the value
     * from the props as a fallback
     *
     * We check if the value is NOT a number, becuase
     * 0 is still an acceptable number but would be fals
     * in an ipothetical if statement
     */
    const selected = isNaN(newProps.selected)
      ? this.props.selected
      : newProps.selected

    const Tab = this.scroll.childNodes[selected]
    const { clientWidth: width, offsetLeft: left } = Tab

    this.scroll.parentElement.style.height = Tab.clientHeight + 'px'

    this.setState({ style: { left, width } })
  }


  @bind
  moveScroll(direction) {
    let id    = 0
    let count = 0

    switch(direction) {
      case 'right':
        id = setInterval(() => {
          count++
          this.scroll.scrollLeft += 1

          if(count == 100) clearInterval(id)
        }, 0.05)
      break

      case 'left':
        id = setInterval(() => {
          count++
          this.scroll.scrollLeft -= 1

          if (count == 100) clearInterval(id)
        }, 0.05)
      break
    }
  }

  // Useful helper function to check if the container is scrollable
  isScrollable(el) {
    if(el.scrollLeft === 0) {
      el.scrollLeft++

      if(el.scrollLeft === 0) return false

      el.scrollLeft--
    }

    return true
  }

  render(props) {
    const { children, secondaryIndicator, scrollable } = props

    return (
      <Container {...props}>
        {scrollable
          ? <Arrow onClick={() => this.moveScroll('left')} />
          : null
        }
        <Scroll
          {...props}
          innerRef={e => this.scroll = e}
          translate={this.state.translate}
          children={[
            ...children,
            <Indicator
              {...props}
              translate={this.state.translate}
              style={this.state.style}
            />
          ]}
        />
        {scrollable
          ? <Arrow right onClick={() => this.moveScroll('right')} />
          : null
        }
      </Container>
    )
  }
}
