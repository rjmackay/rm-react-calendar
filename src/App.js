import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { year: 2018 };

    this.handleChangeYear = this.handleChangeYear.bind(this);
  }

  handleChangeYear(event) {
    this.setState({year: parseInt(event.target.value, 10)});
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h2>
            Calendar demo app
          </h2>
        </header>
        <main>
          <Calendar year={this.state.year}></Calendar>
        </main>
        <footer>
          <Form>
            <FormGroup>
              <Label>Change year: <Input type="number" value={this.state.year} onChange={this.handleChangeYear} /></Label>
            </FormGroup>
          </Form>
        </footer>
      </div>
    );
  }
}

export default App;
