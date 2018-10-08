import React, { Component } from 'react';
import './Calendar.css';
import Month from '../Month/Month';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        {
          [...Array(12)].map((e, index) => <Month year={this.props.year} month={index}></Month>)
        }
      </div>
    );
  }
}

export default Calendar;
