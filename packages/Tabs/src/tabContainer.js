import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { darken }     from 'polished'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };

  div:not(:last-child) {
    width: ${props => props.fullWidth ? 'calc(100% / ' + props.children.length + ')' : 'auto'};
  }
`

const Indicator = styled.div`
  position: absolute;
  bottom: 0.5px;
  transition: width 150ms, left 150ms;
  height: 2px;
  background: ${props => props.theme.secondary || lightTheme.secondary};
  background: red
`

export class TabContainer extends Component {
  state = { style: {} }

  /**
   * Call the mount event as an update
   * in fact it's the "initial" update)
   */
  componentDidMount = this.componentWillReceiveProps

  componentWillReceiveProps(newProps = {}) {
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

    this.setState({ style: { left, width }})

    window.addEventListener('resize', () => {
      const { clientWidth: width, offsetLeft: left } = Tab

      this.setState({ style: { left, width }})
    })
  }

  render(props) {
    return(
      <Container
        {...props}
        innerRef={e => this.container = e}
      >
        {props.children}
        <Indicator style={this.state.style} />
      </Container>
    )
  }
}
