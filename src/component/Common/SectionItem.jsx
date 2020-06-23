import React, { Component } from "react";
class SectionItem extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <i className={`fas ${this.props.icon} m-auto text-primary`}></i>
          </div>
          <h3>{this.props.title}</h3>
          <p className="lead mb-0">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default SectionItem;
