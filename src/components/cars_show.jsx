import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../actions';
import { deleteCar } from '../actions';
import Car from '../components/car';
import CarsIndex from '../containers/cars_index';
import NavBar from '../components/navbar';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar: fetchCar },
    { deleteCar: deleteCar }
    dispatch
  );
}

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.car) {
      return <p>Loading</p>;
    }

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavBar>
          <Link to="/" component={CarsIndex}>
            Back
          </Link>
        </NavBar>
        <div style={{ width: "300px" }}>
          <Car car={this.props.car}>
            <h3>{this.props.car.plate}</h3>
            <Link to={`/cars/${this.props.car.id}`}>
              Delete
            </Link>
          </Car>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  console.log(ownProps.match.params.id);
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
