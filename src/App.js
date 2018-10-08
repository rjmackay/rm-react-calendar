import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Calendar demo app
          </p>
        </header>
        <Calendar year={2018}></Calendar>
      </div>
    );
  }
}

export default App;
