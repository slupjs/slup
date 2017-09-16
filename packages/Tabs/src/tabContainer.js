import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

import { lightTheme } from '@slup/theming'
import { darken, rgba }     from 'polished'
import { Arrow } from './arrow'


const FixedContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  min-height: 48px;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };
`

const Container = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  width: ${props => props.scrollable && !props.center ? '100%' : 'auto'};
  padding-left: ${props => props.scrollable && !props.center ? '80px' : '0'};
  background: ${props => props.primary
    ? darken(0.02, props.theme.primary || lightTheme.primary)
    : 'inherit'
  };
  transform: translateX(${props => props.translate}%);

  div:not(:last-child) {
    width: ${props => props.fullWidth ? 'calc(100% / ' + (props.children.length - 1) + ')' : 'auto'};
  }

  @media only screen and (max-width: 480px) {
    overflow-x: auto;
    padding-left: ${props => props.scrollable && !props.center ? '72px' : '0'};
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
  state = {
    style: {},
    translate: 0
  }

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

  @bind
  moveScroll(direction) {
    const { translate: _translate } = this.state
    let   translate = null

    if(direction == 'right') {
      translate = _translate + 10
    } else {
      translate = _translate - 10
    }

    this.setState({ translate })
  }


  render({ children, secondaryIndicator, ...props }) {
    return (
      <FixedContainer primary={props.primary} center={props.center}>
        <Arrow 
          left
          onClick={() => this.moveScroll('right')}
        />
        <Container
          {...props}
          innerRef={e => this.container = e}
          translate={this.state.translate}
          children={[
            ...children,
            <Indicator
              style={this.state.style}
              secondaryIndicator={secondaryIndicator}
            />
          ]}
        />
        <Arrow
          right
          onClick={() => this.moveScroll('left')}
        />
      </FixedContainer>
    )
  }
}
