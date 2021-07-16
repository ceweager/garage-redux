import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.car.brand} - {this.props.car.model}</h4>
        <h5>Owner: {this.props.car.owner}</h5>
      </div>
    );
  }
}