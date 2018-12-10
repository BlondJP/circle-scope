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

  openModal = () => {
    return (
      <div class="modal">
        <div class="modal-background"></div>
          <div class="modal-content">
              my modal
          </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    )
  }

  render() {
    return (
      <div className='Circle Creator'>
        <button className="button is-primary" onClick={this.openModal}>Add New Circle</button>
      </div>
    )
  }

}

export default CircleCreator;
