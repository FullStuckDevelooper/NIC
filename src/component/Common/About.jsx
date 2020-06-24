import React, { Component } from "react";
import img2 from "../img/white.jpg";

const css = {
  backgroundImage: `url(${img2})`,
  height: "600px"
};
class About extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron  " style={css}>
        <h1 className="display-4 text-info">Tentang NIC</h1>
        <p className="lead">
          Adalah sebuah lembaga kursus dan pelatihan yang berlokasi di Jl. Raya
          Karangnunggal No. 34 A Rancamaya Karangnunggal Kab. Tasikmalaya yang
          terlah terakreditasi C oleh BAN FNFI
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#!" role="button">
            Some action
          </a>
        </p>
      </div>
    );
  }
}

export default About;
