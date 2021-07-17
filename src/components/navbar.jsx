import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <div style={{ width: "200px" }}>
        <img src="" alt="placeholder" />
        <img src="" alt="lewagon symbol" />
        <h1>{this.props.garage}</h1>
        <p>Our garage is the best. Great prices, always on time, we are amazing.</p>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(NavBar);
