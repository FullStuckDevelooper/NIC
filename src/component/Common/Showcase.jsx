import React, { Component } from "react";
import img from "../img/showcase/pendaftaran.jpg";
import img2 from "../img/showcase/pendaftaran2.jpg";
import img3 from "../img/showcase/pembelajaran.jpg";
import img4 from "../img/showcase/pembelajaran2.jpg";
import img5 from "../img/showcase/ujian3.jpeg";
import img6 from "../img/showcase/ujian4.jpeg";
import img7 from "../img/showcase/magang.jpg";
import img8 from "../img/showcase/magang2.jpg";

import ShowcaseLeft from "./ShowcaseLeft";
import ShowcaseRight from "./ShowcaseRight";

const showcase = [
  {
    img: img,
    title: "Pendaftaran",
    subtitle:
      "1. Pendaftaran Kelas Regular : Pertengahan Semester(Juli - Agustus) pada jam kerja "
  },
  {
    img: img2,
    title: "Pendaftaran",
    subtitle: "2. Pendaftaran Kelas Privat / Umum Menyesuaikan"
  },
  {
    img: img3,
    title: "Pembelajaran",
    subtitle:
      "1. Jadwal Pembelajaran Kelas Reguler(Senin s.d Sabtu - Jam Kerja 08.00 - 16.00) "
  },
  {
    img: img4,
    title: "Pembelajaran",
    subtitle:
      "2. Jadwal Pembelajaran Kelas Privat / Kelas Umum (Jumat, Sabtu & Minggu - Jam 10.00 s.d 16.00)"
  },
  {
    img: img5,
    title: "Evaluasi",
    subtitle: "1. Evaluasi Teori & Praktek (dilaksanakan setelah selesai PBM)"
  },
  {
    img: img6,
    title: "Evaluasi",
    subtitle:
      "2. Evaluasi Kompetensi Program Kerjasama (Bekerjasama dengan LP3I Tasikmalaya)"
  },
  {
    img: img7,
    title: "Pendampingan Magang ",
    subtitle:
      "1. Dilaksanakan dengan bekerjasama Instansi pemerintahan & pendidik an di wilayah Kecamatan Karangnunggal, Bantarkalong, Bojongasih, dan Kecamatan sekitar"
  },
  {
    img: img8,
    title: "Pendampingan Magang ",
    subtitle:
      "2. Khusus nya di wilayah Tasik Selatan Dilaksanakan dengan bekerjasama dengan  DU/DI"
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
