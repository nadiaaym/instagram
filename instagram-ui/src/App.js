import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './features/components/button/button.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false }

  }
  render() {
    return (
      <div className="App">
        {
          this.state.show ? (
            <div>
              <Button text="some text" onClick={() => console.log("a")} />
              <Button text="some other text" onClick={() => console.log("b")} />
            </div>
          ) : (
              <div>not checked</div>
            )
        }
        <input
          type="checkbox" onChange={() => this.setState({ show: !this.state.show })} >
        </input>
      </div>
    )
  }
}

export default App;

