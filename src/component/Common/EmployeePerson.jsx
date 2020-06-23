import React, { Component } from "react";
class EmployeePerson extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img
            className="img-fluid img-thumbnail rounded-circle mb-3"
            src={this.props.img}
            alt=""
          />
          <h5>{this.props.name}</h5>
          <p className="font-weight-light mb-5">{this.props.detail}</p>
        </div>
      </div>
    );
  }
}

export default EmployeePerson;
