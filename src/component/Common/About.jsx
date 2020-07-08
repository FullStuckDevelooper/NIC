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
      <div className="jumbotron pb-3 " style={css}>
        <h1 data-aos="fade-right" className="display-4 text-info ">
          Tentang NIC{" "}
        </h1>
        <p data-aos="fade-left" className="lead ">
          LKP. NIC (Naluri Informatika Computer ) merupakan salah satu perintis
          lembaga kursus di wilayah tasik selatan. Berdiri di tahun 1995 dengan
          visi Peningkatan SDM yang terampil dan berkualitas di bidang teknologi
          dan informasi yang berlokasi di Jl. Raya Karangnunggal No. 34 A
          Rancamaya Karangnunggal Kab. Tasikmalaya yang telah terakreditasi C
          oleh BAN FNFI. Sudah berdiri sejak 19 September 1995 dan telah
          mengajar ratusan Peserta Didik
        </p>
        <hr className="my-2" />
        <div data-aos="zoom-out-up" className="text-center  p-5 m-5 ">
          <p className="lead font-weight-bold">Contact Person</p>
          <a
            href={"https://www.facebook.com/lkpyayasan.nic"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab  fa-facebook fa-4x fa-fw"></i>
          </a>
          <a
            className="text-success"
            href={"https://wa.me/6282218245461"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab  fa-whatsapp fa-4x fa-fw"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
