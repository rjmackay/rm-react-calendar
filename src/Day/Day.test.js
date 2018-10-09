import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Day date="10" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
