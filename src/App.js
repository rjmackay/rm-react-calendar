import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import './App.css';
import Calendar from './Calendar/Calendar';
import Day from './Day/Day';
import categories from './categories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { year: 2018 };

    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleJumpToCurrentYear = this.handleJumpToCurrentYear.bind(this);
  }

  handleJumpToCurrentYear(event) {
    this.setState({year: (new Date()).getFullYear()});
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

          <div className="row">
            <div className="col-4">
              <Button onClick={this.handleJumpToCurrentYear}>Jump to current year</Button>
              <Form>
                <FormGroup>
                  <Label>Change year: <Input type="number" value={this.state.year} onChange={this.handleChangeYear} /></Label>
                </FormGroup>
              </Form>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <Table size="sm">
                <thead>
                  <tr>
                    <th colSpan="7">
                      Key
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { Object.keys(categories).map((category) => <tr key={category}><Day date={category} category={category} /></tr>) }
                </tbody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
