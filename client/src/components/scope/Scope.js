import React, { Component } from 'react';
import Circle from '../circle/Circle';
import circles from '../circle/CirclesFixtures';
import CircleCreator from '../circle-creator/CircleCreator'

class Scope extends Component {

  constructor(props) {
    super(props);
    this.state = {circles: circles};
  }

  getNextColor = () => {
    const colors = [
      'red',
      'yellow',
      'blue',
      'green'
    ]
    return colors[Math.floor(Math.random() * colors.length)];
  }

  addCircle = (circleName) => {
    let circle = {id:(this.state.circles.length + 1), name: circleName, members: []};
    console.log(circle)
    this.setState({circles : [...this.state.circles, circle]});
    console.log(this.state.circles)
  }

  render() {
    const circleList = this.state.circles.map((circle) => <Circle key={circle.id} circle={circle} color={this.getNextColor()}/>)

    return (
      <div className="App universe">
        <CircleCreator addCircle={this.addCircle}/>
        {circleList}
      </div>
    );
  }
}

export default Scope;
