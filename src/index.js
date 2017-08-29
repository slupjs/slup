import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import { Slider } from '@slup/slider'
import { Navbar } from '@slup/navbar'
import {
  FlatButton,
  RaisedButton,
  Fab
} from '@slup/buttons'
import {
  List,
  ListItem,
  LeftContent,
  MainContent,
  RightContent
} from '@slup/lists'
import { Radio,
  Checkbox,
  Switch
} from '@slup/controls'
import { Sidenav } from '@slup/sidenav'

class Tester extends Component {
  state = {
    value: 0,
    total: 5000,
    checked: false,
    visible: true,
    opened: false
  }

  handleChange(value) {
    this.setState({ value })
  }

  handleControls() {
    this.setState({ checked: !this.state.checked })
  }
  handleClick() {
    this.setState({ visible: !this.state.visible })
  }

  showSidenav(e) {
    this.setState({ opened: !this.state.opened })

    document.body.style.overflow = 'hidden'
  }

  hideSidenav() {
    this.setState({ opened: false })

    document.body.style.overflow = ''
  }

  render() {
    const {
      value,
      total,
      checked,
      visible,
      opened
    } = this.state

    return(
      <section>

        {/* Navbar demo */}
        <Navbar reveal={true} background='teal'>
          <div style="cursor:pointer" onClick={this.showSidenav.bind(this)}>
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </div>
        </Navbar>

        <Sidenav responsive={true} right={true} onClose={this.hideSidenav.bind(this)} opened={opened}>
          <List>
            <ListItem sublist={true} visible={visible}>
              <ListItem rippleOptions={{ background: 'rgba(0, 0, 0, .5)' }} onClick={this.handleClick.bind(this)}>
                NESTED
              </ListItem>

              <List>
                <ListItem nested={true}>text</ListItem>
                <ListItem nested={true}>text</ListItem>
                <ListItem nested={true}>text</ListItem>
              </List>
            </ListItem>
          </List>
        </Sidenav>

        <div style={{height: 50}} />
        {/* Ripple demo */}
        <div style={{
          position: 'relative',
          background: 'blue',
          zIndex: 100,
          height: 200,
          width: 500 }}
        >
          <Ripple />
        </div>

        <div style={{height: 50}} />

        {/* Slider demo */}
        <div style={{ margin: 8, padding: 16 }}>
          <Slider
            value={value}
            max={total}
            onChange={this.handleChange.bind(this)}
          />
          <div style={{height: 50}} />
          <Slider
            value={value}
            max={total}
            discrete={true}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div style={{height: 50}} />

        {/* Buttons demo */}

        <FlatButton
          color='black'
          rippleOptions={{ background: 'rgba(0, 0, 0, .5)' }}
        >
          Test
        </FlatButton>

        <RaisedButton background='teal'>
          Text
        </RaisedButton>

        <div style={{height: 50}} />

        <form>
          <Radio
            onChange={this.handleControls.bind(this)}
            checked={checked}
            style={{margin: 32}}
          />
          <Checkbox
            onChange={this.handleControls.bind(this)}
            checked={checked}
            style={{margin: 32}}
          />

          <Switch
            onChange={this.handleControls.bind(this)}
            checked={checked}
            style={{margin: 32}}
          />
        </form>

        <div style={{height: 50}} />

        {/* Lists */}
        <List>
          <ListItem threeline={true} rippleOptions={{ background: 'teal' }}>
            <LeftContent>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </LeftContent>
            <MainContent>
              <span style="font-size:16px">Hello</span>
              <span style="font-size:13px">Hello</span>
              <span style="font-size:13px">Hello</span>
            </MainContent>
            <RightContent>
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </RightContent>
          </ListItem>
          <ListItem ripple={false} hoverable={false}>
            text
          </ListItem>

          {/* Nested list */}

          <ListItem sublist={true} visible={visible}>
            <ListItem rippleOptions={{ background: 'rgba(0, 0, 0, .5)' }} onClick={this.handleClick.bind(this)}>
              NESTED
            </ListItem>

            <List>
              <ListItem nested={true}>text</ListItem>
              <ListItem nested={true}>text</ListItem>
              <ListItem nested={true}>text</ListItem>
            </List>
          </ListItem>
        </List>

        <div style={{height: 5000}} />

      </section>
    )
  }
}

render(<Tester />, document.getElementById('root'))
