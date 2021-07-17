/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Car from '../components/car';
import CarsNew from '../components/cars_new';
import NavBar from '../components/navbar';
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
      <div className="view-container" style={{ display: "flex", justifyContent: "center" }}>
        <NavBar>
          <Link to="/cars/new" component={CarsNew}>
            Add Car
          </Link>
        </NavBar>
        <div className="list-container">
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
