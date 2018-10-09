import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { format, getWeeksInMonth, getDaysInMonth, getDay } from 'date-fns';
import './Month.css';
import Day from '../Day/Day';

const buildWeeksArray = (year, month) => {
  let firstOfMonth = new Date(year, month, 1);
  let weeks = [...Array(getWeeksInMonth(firstOfMonth))].map((e, index) => [...Array(7)]);
  let endDate = getDaysInMonth(firstOfMonth);
  let week = 0;
  for (let date = 1; date <= endDate; date++) {
    let index = getDay(new Date(year, month, date));
    weeks[week][index] = date;
    if (index === 6) {
      week++;
    }
  }

  return weeks;
}

class Month extends Component {

  render() {
    let monthFormatted = format(new Date(this.props.year, this.props.month, 1), 'LLLL');
    let weeks = buildWeeksArray(this.props.year, this.props.month);

    return (
      <div className="Month">
        <Table size="sm">
          <thead>
            <tr>
              <th colSpan="7">
                {monthFormatted}
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
