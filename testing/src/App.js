import React, { Component } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    ball: 0,
    skrike: 0,
    foul: 0,
    hit: 0
  }
  render() {
    return (
      <div>
        <Display ball={this.state.ball} strike={this.state.strike} foul={this.state.foul} hit={this.state.hit} />
        <Dashboard addBall={this.addBall} addStrike={this.addStrike} addFoul={this.addFoul} addHit={this.addHit}/>
      </div>
    );
  }

  addBall = () => {
    if(this.state.ball < 3) {
      this.setState({
        ball: this.state.ball + 1
      })
    } else {
      this.setState({
        ball: 0,
        strike: 0,
        foul: 0
      })
    }
  }

  addStrike = () => {
    if(this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      })
    } else {
      this.setState({
        ball: 0,
        strike: 0,
        foul: 0
      })
    }
  }

  addFoul = () => {
    if(this.state.foul < 2 && this.state.strike < 2) {
      this.setState({
        foul: this.state.foul + 1,
        strike: this.state.strike + 1
      })
    }

  }

  addHit = () => {
    this.setState({
      ball: 0,
      strike: 0,
      foul: 0,
      hit: this.state.hit + 1
    })
  }
}

export default App;
