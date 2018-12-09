import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './components/Circle';

class App extends Component {



  render() {

    const circles = [
      {id: 1, name:"Famille Blond", members: [
        {id: 1, username: "jpblond"},
        {id: 2, username: "mlblond"},
        {id: 3, username: "cblond"},
        {id: 4, username: "mblond"}
      ]},
      {id: 2, name:"Famille Canevy", members: [
        {id: 4, username: "cocanevy"},
        {id: 5, username: "chcanevy"},
        {id: 6, username: "icanevy"}
      ]},
    ];

    const circleList = circles.map((circle) => <Circle circle={circle}/>)

    return (
      <div className="App">
        {circleList}
      </div>
    );
  }
}

export default App;
