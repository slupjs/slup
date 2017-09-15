import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { darken }     from 'polished'

const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: ${props => props.scrollable && !props.center ? '100vw' : 'auto'};
  padding-left: ${props => props.scrollable && !props.center ? '80px' : '0'};
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };

  div:not(:last-child) {
    width: ${props => props.fullWidth ? 'calc(100% / ' + (props.children.length - 1) + ')' : 'auto'};
  }

  @media only screen and (max-width: 480px) {
    overflow-x: auto;
    padding-left: ${props => props.scrollable && !props.center ? '80px' : '0'};
  }
`

const Indicator = styled.div`
  position: absolute;
  bottom: 0.5px;
  transition: width 150ms, left 150ms;
  height: 2px;
  background: ${props => props.secondaryIndicator
    ? props.theme.secondary || lightTheme.secondary
    : props.theme.text || lightTheme.text
  };
`

export class TabContainer extends Component {
  state = { style: {} }

  componentDidMount() {
    /**
     * Call the mount event as an update
     * in fact it's the "initial" update)
     */
    this.updateIndicator()

    // Listen for resized
    window.addEventListener('resize', this.updateIndicator)
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

    const Tab = this.container.childNodes[selected]
    const { clientWidth: width, offsetLeft: left } = Tab

    this.setState({ style: { left, width } })
  }

  render({ children, secondaryIndicator, ...props }) {
    return (
      <Container
        {...props}
        innerRef={e => this.container = e}
        children={[
          ...children,
          <Indicator
            style={this.state.style}
            secondaryIndicator={secondaryIndicator}
          />
        ]}
      />
    )
  }
}
