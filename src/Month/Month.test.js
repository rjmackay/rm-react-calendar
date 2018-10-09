import React from 'react';
import ReactDOM from 'react-dom';
import Month from './Month';

it('renders without crashing', () => {
  const tr = document.createElement('tr');
  ReactDOM.render(<Month year="2018" month="10" />, tr);
  ReactDOM.unmountComponentAtNode(tr);
});
