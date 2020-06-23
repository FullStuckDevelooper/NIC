import React, { Component } from "react";
class PricingService extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <li>
        <span className="fa-li">
          <i className={this.props.icon}></i>
        </span>
        {this.props.service}
      </li>
    );
  }
}

export default PricingService;
