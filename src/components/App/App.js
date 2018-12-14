import React, { Component } from 'react';
import logo from "../../assets/logo.svg";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/components/App/App.js</code>.
          </p>
          <a
            className="App-link"
            href="https://botbotdot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            botbotdot.com
          </a>
        </header>
      </div>
    );
  }
}

export default App;
