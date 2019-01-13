import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  // state = {
  //   users: []
  // }

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => {
  //       res.json()
  //         .then(res => {
  //           this.setState({ users: res.users })
  //         })
  //     })
  // }

  render() {
    // const { users } = this.state;
    // console.log(users)
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

      /*<div className="App">
        <h1>Users</h1>
        {users.map(user =>
          <div key={user.username}>{user.username}</div>
        )}
        </div>*/

export default App;