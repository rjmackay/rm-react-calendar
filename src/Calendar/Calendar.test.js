import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar year="2018" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 12 months', () => {
  const calendar = shallow(<Calendar year="2018" />);
  expect(calendar.find('Month')).toHaveLength(12);
});

it('renders the year', () => {
  const calendar = shallow(<Calendar year="2020" />);
  expect(calendar.text()).toContain(2020);
});
