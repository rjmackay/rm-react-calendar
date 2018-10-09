import React from 'react';
import ReactDOM from 'react-dom';
import Month from './Month';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Month year="2018" month="10" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correct number of days', () => {
  const month = shallow(<Month year="2018" month="9" />);
   // Note this is 5 weeks * 7 days because it includes empty days in the grid
  expect(month.find("Table").shallow().find('Day')).toHaveLength(35);

  const month1 = shallow(<Month year="2017" month="4" />);
  expect(month1.find("Table").shallow().find('Day')).toHaveLength(35);

  const month2 = shallow(<Month year="2017" month="3" />);
  expect(month2.find("Table").shallow().find('Day')).toHaveLength(42);
});

it('renders the year', () => {
  const month = shallow(<Month year="2020" month="8" />);
  expect(month.find("Table").shallow().text()).toContain("September");
});
