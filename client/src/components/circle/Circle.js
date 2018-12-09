import React, { Component } from 'react';
import './circle.css';

class Circle extends Component {
  render() {
    const memberList = this.props.circle.members.map((member) => <li key={member.id}>{member.username}</li>)

    return (
      <div className={'circle ' + this.props.color}>
          <br />
          <h2>{this.props.circle.name}</h2>
          <ul>
              {memberList}
          </ul>
      </div>
    );
  }
}

export default Circle;
