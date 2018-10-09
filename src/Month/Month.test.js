import React from 'react';
import ReactDOM from 'react-dom';
import Month from './Month';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Month year="2018" month="10" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
