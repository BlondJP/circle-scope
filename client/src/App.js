import React, { Component } from 'react';
import './App.css';
import Circle from './components/circle/Circle';
import circles from './components/circle/CirclesFixtures';

class App extends Component {

  getNextColor = () => {
    const colors = [
      'red',
      'yellow',
      'blue',
      'green'
    ]
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    const circleList = circles.map((circle) => <Circle key={circle.id} circle={circle} color={this.getNextColor()}/>)

    return (
      <div className="App universe">
        {circleList}
      </div>
    );
  }
}

export default App;
