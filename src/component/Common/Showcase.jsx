import React, { Component } from "react";
import img from "../img/showcase/pendaftaran.jpg";
import img1 from "../img/showcase/pembelajaran.jpg";
import img2 from "../img/showcase/ujian.jpg";
import img3 from "../img/showcase/magang2.jpg";

import ShowcaseLeft from "./ShowcaseLeft";
import ShowcaseRight from "./ShowcaseRight";

const showcase = [
  {
    img: img,
    title: "Pendaftaran",
    subtitle: "Kegiatan Pendaftaran dilakukan pada awal semester xxxx"
  },
  {
    img: img1,
    title: "Pembelajaran",
    subtitle: "Kegiatan Pembelajaran dilakukan pada x hari dan x jam"
  },
  {
    img: img2,
    title: "Ujian",
    subtitle: "Ujian dilakukan pada x hari dan x jam"
  },
  {
    img: img3,
    title: "Magang",
    subtitle:
      "Magang dilakukan ketika x x x pada akhir semester untuk menguji kecakapan peserta didik"
  }
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
