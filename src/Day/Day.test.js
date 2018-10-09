import React from 'react';
import ReactDOM from 'react-dom';
import Day, { NormalDay } from './Day';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const tr = document.createElement('tr');
  ReactDOM.render(<Day date="10" />, tr);
  ReactDOM.unmountComponentAtNode(tr);
});

it('renders the date', () => {
  const day = shallow(<Day date="26" />);
  expect(day.find('NormalDay')).toHaveLength(1);
  expect(day.find('EmptyDay')).toHaveLength(0);

  expect(day.find('NormalDay').shallow().text()).toContain("26");
});

it('renders an empty date', () => {
  const day = shallow(<Day />);
  expect(day.find('NormalDay')).toHaveLength(0);
  expect(day.find('EmptyDay')).toHaveLength(1);

  expect(day.find('EmptyDay').shallow().find('.bg-light')).toHaveLength(1);
});

it('toggles modal state on click', () => {
  const tr = document.createElement('tr');
  const day = shallow(<NormalDay date="26" />, { attachTo: tr });
  expect(day.text()).toContain("26");
  expect(day.state('modalOpen')).toBe(false);

  day.find('a').simulate('click');
  expect(day.state('modalOpen')).toBe(true);

  day.find('a').simulate('click');
  expect(day.state('modalOpen')).toBe(false);
});

