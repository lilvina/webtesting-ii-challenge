import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './components/Dashboard.js';

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    render(<Dashboard />)
  })



})
