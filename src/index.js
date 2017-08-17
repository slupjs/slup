import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import { Slider } from '@slup/slider'
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

class Tester extends Component {
  state = {
    value: 0,
    total: 5000
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    const { value, total } = this.state

    return(
      <section>

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
        <Fab background='rgb(0, 150, 136)'>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </Fab>

        <div style={{height: 50}} />

        <List>
          <ListItem threeline={true}>
            <LeftContent>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </LeftContent>
            <MainContent>
              <span style="font-size:16px">Hello</span>
              <span style="font-size:13px">Hello</span>
              <span style="font-size:13px">Hello</span>
            </MainContent>
            <RightContent>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </RightContent>
            <Ripple background='red' />
          </ListItem>
          <ListItem>text
            <Ripple background='red' />
          </ListItem>
          <ListItem>text
            <Ripple background='red' />
          </ListItem>
          <ListItem>text
            <Ripple background='red' />
          </ListItem>
        </List>

      </section>
    )
  }
}

render(<Tester />, document.getElementById('root'))
