import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calendar year={2018}></Calendar>
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

export default App;
