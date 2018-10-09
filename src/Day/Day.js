import React, { Component } from 'react';

class Day extends Component {
  render() {
    if (this.props.date) {
      return <td>{this.props.date}</td>
    } else {
      return <td className="bg-light"></td>
    }
  }
}

export default Day;
