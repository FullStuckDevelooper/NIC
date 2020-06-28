import React, { Component } from "react";
class ShowcaseRight extends Component {
  state = {};
  render() {
    return (
      <div className="row no-gutters">
        <div
          data-aos="fade-right"
          className="col-lg-6 text-white showcase-img"
          style={{ backgroundImage: `url(${this.props.img})` }}
        ></div>
        <div data-aos="fade-left" className="col-lg-6 my-auto showcase-text">
          <h2>{this.props.title}</h2>
          <p className="lead mb-0">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default ShowcaseRight;
