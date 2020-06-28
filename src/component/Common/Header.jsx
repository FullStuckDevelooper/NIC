import React, { Component } from "react";
import img from "../img/nic.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="masthead text-black ">
        <div className="container">
          <div className="row mt-1 pt-1">
            <div className="col-xl-6 mx-auto">
              <img
                data-aos="zoom-in"
                src={img}
                width="50%"
                height="100%"
                className="rounded mx-auto d-block"
                alt="..."
              />
            </div>
            <div className="col-xl-6 mx-auto pt-3">
              <h1 data-aos="zoom-out" className="mb-5 text-center text-primary">
                Naluri Informatika Computer
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
