import React from 'react';
import ReactDOM from 'react-dom';
import Month from './Month';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Month />, div);
  ReactDOM.unmountComponentAtNode(div);
});
