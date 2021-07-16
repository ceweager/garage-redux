import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getCars: getCars },
    dispatch
  )
}

class CarsIndex extends Component {
  render() {
    return (
      <div>
        this.props.cars.map(){(car) => {
          <Link to={`/cars/${car.id}`} key={carid}>
            <Car car={car} key={car.plate} />
          </Link>
        }}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);