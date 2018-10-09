import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { format, getWeeksInMonth, getDaysInMonth, getDay } from 'date-fns';
import './Month.css';
import Day from '../Day/Day';

class Month extends Component {

  buildWeekArrays(firstOfMonth) {
    let weeks = [...Array(getWeeksInMonth(firstOfMonth))].map((e, index) => [...Array(7)]);
    let endDate = getDaysInMonth(firstOfMonth);
    let week = 0;
    for (let date = 1; date <= endDate; date++) {
      let index = getDay(new Date(this.props.year, this.props.month, date));
      weeks[week][index] = date;
      if (index === 6) {
        week++;
      }
    }

    return weeks;
  }

  render() {
    let firstOfMonth = new Date(this.props.year, this.props.month, 1);
    let weeks = this.buildWeekArrays(firstOfMonth);

    return (
      <div className="Month">
        <Table size="sm">
          <thead>
            <tr>
              <th colSpan="7">
                {format(firstOfMonth, 'LLLL')}
              </th>
            </tr>
            <tr className="bg-light">
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            { weeks.map((week, index) => (
              <tr key={index}>
                { week.map((date, index) => <Day key={index} date={date} />)}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Month;
