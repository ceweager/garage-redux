/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Car from '../components/car';
import CarsNew from '../components/cars_new';
import { getCars } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getCars: getCars },
    dispatch
  );
}

class CarsIndex extends Component {
  componentWillMount() {
    this.props.getCars();
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <img src="" alt="placeholder" />
          <img src="" alt="lewagon symbol" />
          <h1>{this.props.garage}</h1>
          <p>Our garage is the best. Great prices, always on time, we are amazing.</p>
          <Link to="/cars/new" component={CarsNew}>
            Add a car
          </Link>
        </div>
        <div>
          {this.props.cars.map((car) => {
            return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <Car car={car} key={car.plate} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    garage: state.garage,
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
