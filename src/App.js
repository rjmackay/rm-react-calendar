import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h2>
            Calendar demo app
          </h2>
        </header>
        <main>
          <Calendar year={2018}></Calendar>
        </main>
      </div>
    );
  }
}

export default App;
