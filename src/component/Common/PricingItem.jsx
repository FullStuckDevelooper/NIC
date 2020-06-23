import React, { Component } from "react";
import PricingService from "./PricingService";

class PricingItem extends Component {
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
            <div className="container" style={{ height: "300px" }}>
              <ul className="fa-ul">
                {this.props.service.map((item, index) => {
                  return (
                    <PricingService
                      service={item}
                      key={index}
                      icon={this.props.icon}
                    />
                  );
                })}
              </ul>
            </div>
            <button className="btn btn-block btn-primary text-uppercase">
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingItem;
