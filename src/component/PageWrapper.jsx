import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "./img/nic.png";
import img2 from "./img/white.jpg";
import AOS from "aos";

class PageWrapper extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link className="navbar-brand" to="/">
            <img
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-right ">
              <li className="nav-item">
                <Link className="nav-link" to="beranda">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="organisasi">
                  Organisasi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="kegiatan">
                  Kegiatan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="harga">
                  Harga
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section style={{ backgroundImage: `url(${img2}) ` }}>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default PageWrapper;
