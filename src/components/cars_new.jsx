import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { Link } from 'react-router-dom';
import CarsIndex from '../containers/cars_index';
import NavBar from '../components/navbar';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, this.generatePost);
  }

  generatePost = (post) => {
    this.props.history.push('/');
    return post;
  };

  renderField = (field) => {
    return (
      <div className="form-group">
        <label htmlFor="field.label">{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    console.log(this.renderField);
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NavBar>
          <Link to="/" component={CarsIndex}>
            Back
          </Link>
        </NavBar>
        <div>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              label="Brand"
              name="brand"
              type="text"
              component={this.renderField}
            />
            <Field
              label="model"
              name="model"
              type="text"
              component={this.renderField}
            />
            <Field
              label="owner"
              name="owner"
              type="text"
              component={this.renderField}
            />
            <Field
              label="plate"
              name="plate"
              type="text"
              component={this.renderField}
            />
            <button type="submit">Create Car</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(null, { createCar })(CarsNew));

