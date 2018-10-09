import React, { Component } from 'react';
import './Calendar.css';
import Month from '../Month/Month';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <h3 className="text-center">{this.props.year}</h3>
        <div className="row">
        {
          [...Array(12)].map((e, index) => <div className="col-4" key={index}><Month year={this.props.year} month={index}></Month></div>)
        }
        </div>
      </div>
    );
  }
}

export default Calendar;
