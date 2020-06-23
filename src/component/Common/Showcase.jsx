import React, { Component } from "react";
import img from "../img/showcase/daftar.jpg";
import img1 from "../img/showcase/belajar.jpg";
import img2 from "../img/showcase/2.jpg";
import img3 from "../img/showcase/3.jpg";

import ShowcaseLeft from "./ShowcaseLeft";
import ShowcaseRight from "./ShowcaseRight";

const showcase = [
  { img: img, title: "Kegiatan A", subtitle: "Detail Kegiatan A" },
  { img: img1, title: "Kegiatan B", subtitle: "Detail Kegiatan B" },
  { img: img2, title: "Kegiatan C", subtitle: "Detail Kegiatan B" },
  { img: img3, title: "Kegiatan D", subtitle: "Detail Kegiatan D" }
];

class Showcase extends Component {
  state = {};
  render() {
    return (
      <section className="showcase">
        <div className="container-fluid p-0">
          {showcase.map((item, index) => {
            if (index % 2 === 0) {
              return <ShowcaseLeft {...item} key={index} />;
            } else {
              return <ShowcaseRight {...item} key={index} />;
            }
          })}
        </div>
      </section>
    );
  }
}

export default Showcase;
