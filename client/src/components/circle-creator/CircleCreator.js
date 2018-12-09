import React, { Component } from 'react';

class CircleCreator extends Component {

  constructor(props) {
    super(props);
    this.state = {circleName: ''};
  }

  handleChange = (e) => {
    this.setState({
      circleName: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCircle(this.state.circleName)
    this.setState({
      circleName: ''
    });
  }

  render() {
    return (
      <div className='Circle Creator'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.circleName} placeholder='Nom du futur cercle'/>
        </form>
      </div>
    )
  }

}

export default CircleCreator;
