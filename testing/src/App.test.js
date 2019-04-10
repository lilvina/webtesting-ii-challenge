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

  it('should add a ball', () => {
    const { getByText } = render(<App />)

    const button = getByText("ball")
    fireEvent.click(button)
    getByText("ball: 1")
  })

  it('should ball out at 4 balls', () => {
    const { getByText } = render(<App />)
    const button = getByText("ball")

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    getByText("ball: 0")
  })

  it('should add a strike', () => {
    const { getByText } = render(<App />)
    const button = getByText("strike")

    fireEvent.click(button)
    getByText("strike: 1")
  })

  it('should hit 3 strikes', () => {
    const { getByText } = render(<App />)
    const button = getByText("strike")

    fireEvent.click(button)
    fireEvent.click(button)
    getByText("strike: 0")
  })

  it('should add a foul', () => {
    const {getByText} = render(<App />)
    const button = getByText("foul")

    fireEvent.click(button)
    getByText("foul: 1")
  })

  it('should add 2 fouls', () => {
    const { getByText } = render(<App />)
    const button = getByText("foul")

    fireEvent.click(button)
    fireEvent.click(button)
    getByText("foul: 0")
  })

  it('should stop at 2 fouls', () => {
    const { getByText } = render(<App />)

    getByText('strike: 2')
  })

  it('should add a hit', () => {
    const { getByText } = render(<App />)

    const button = getByText("hit")
    fireEvent.click(button)
    getByText("hit: 1")
  })

  it('should reset values to 0', () => {
    const { getByText } = render(<App />)

    getByText("strike: 0")
    getByText("ball: 0")
    getByText("foul: 0")
  })

})
