import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import App from './App';
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render successfully', () => {
    render(<App />)
  })

})
