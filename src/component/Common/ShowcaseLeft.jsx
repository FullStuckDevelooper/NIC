import React, { Component } from "react";
class ShowcaseLeft extends Component {
  state = {};
  render() {
    return (
      <div className="row no-gutters">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img"
          style={{ backgroundImage: `url(${this.props.img})` }}
        ></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>{this.props.title}</h2>
          <p className="lead mb-0">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default ShowcaseLeft;
