import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './Month.css';
import format from 'date-fns/format';

class Month extends Component {
  render() {
    let month = format(new Date(this.props.year, this.props.month, 1), 'LLLL');

    return (
      <div className="Month">
        <Table>
          <thead>
            <tr>
              <th colSpan="7">
                {month}
              </th>
            </tr>
            <tr>
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
            <tr>
              <td className="text-muted">29</td>
              <td className="text-muted">30</td>
              <td className="text-muted">31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
            </tr>
            <tr>
              <td>19</td>
              <td className="btn-primary"><strong>20</strong></td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
            </tr>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td className="text-muted">1</td>
              <td className="text-muted">2</td>
              <td className="text-muted">3</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Month;
