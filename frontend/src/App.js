import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './features/components/button/button.component.jsx';
import Postlist from './features/components/post-list/post-list.component.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] }
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/post')
      .then(d => d.json())
      .then(d => this.setState({ posts: d }))
  }
  
  render() {
    console.log(this.state.posts)
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
        <div>
          <Postlist posts={this.state.posts} />
        </div>
      </div>
    )
  }
}

export default App;

