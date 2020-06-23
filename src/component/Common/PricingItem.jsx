import React, { Component } from "react";
class PricingItem extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-6">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {this.props.paket}
            </h5>
            <h6 className="card-price text-center">
              {this.props.harga}
              <span className="period">/Paket</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service1}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service2}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service3}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service4}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service5}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service6}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service7}
              </li>
              <li>
                <span className="fa-li">
                  <i className={this.props.icon}></i>
                </span>
                {this.props.service8}
              </li>
            </ul>
            <a href="#" className="btn btn-block btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingItem;
