import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, this.generatePost);
  }

  generatePost = (post) => {
    console.log(post);
    this.props.history.push('/');
    return post;
  };

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
      <div className="form-group">
        <label htmlFor="field.label">{label}</label>
        <input
          className="form-control"
          type={type}
          {...input}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    );
  }

  render() {
    const required = value => value ? undefined : 'Required';
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="model"
            name="model"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="owner"
            name="owner"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="plate"
            name="plate"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <button type="submit">Create Car</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(null, { createCar })(CarsNew));

