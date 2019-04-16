import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';
import 'jest-dom/extend-expect';

describe('<Display />', () => {
  it('should render without crashing', () => {
    render(<Display />)
  })

  it('shows all the information from dashboard', () => {
    render(<Dashboard ball={3} strike={2} foul={2} hit={4}/>)
  })


})
