import React, { Component } from 'react';
import './circle.css';

class Circle extends Component {
  render() {
    const memberList = this.props.circle.members.map((member) => <li>{member.username}</li>)
    return (
      <div className="circle">
          <h2>Je suis le cercle {this.props.circle.name}</h2>
          <p>
            Et je compte comme membres :
            <ul>
                {memberList}
            </ul>
          </p>
      </div>
    );
  }
}

export default Circle;
