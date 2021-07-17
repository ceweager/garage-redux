import React, { Component } from 'react';
class Car extends Component {
  render() {
    return (
      <div claasName="car-card">
        <img src="" alt="placeholder" />
        <h4>{this.props.car.brand} - {this.props.car.model}</h4>
        <h5>Owner: {this.props.car.owner}</h5>
        {this.props.children}
      </div>
    );
  }
}

export default Car;
