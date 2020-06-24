import React, { Component } from "react";
import img from "../img/nic.png";

class Beranda extends Component {
  render() {
    return (
      <div className="mb-5">
        <div className="container text-center mb-5">
          <img
            className="img-fluid "
            src={img}
            width="200"
            height="200"
            alt=""
          />
        </div>
        <div className="container">
          <h2 className="text-center ">Visi </h2>
          <hr />
          <h4 className="text-center">
            Peningkatan Sumber Daya Manusia yang Terampil dan Berkualitas di
            Bidang Teknologi Informasi
          </h4>
          <h2 className="text-center mt-5">Misi </h2>
          <hr />
          <h4 className="text-center">
            Pembentukan Sumber Daya Manusia yang Terampil dan Berkualitas di
            Bidang Teknologi Informasi yang Mendorong ke Arah Terciptanya
            Lapangan Pekerjaan
          </h4>
          <h2 className="text-center mt-5">Tujuan </h2>
          <hr />
          <h5>
            1. Mewujudkan lembaga pendidikandan pelatihan nonformal yang
            berorientasi pada dunia kerja
          </h5>
          <h5>
            2. Menyediakan lingkungan, sarana dan prasarana pembelajaran yang
            memadai bagi peserta didik{" "}
          </h5>
          <h5>
            3. Tersedianya tenaga pendidik/instruktur dan tenaga kependidikan
            yang kompeten di bidangnya
          </h5>
          <h5>
            4. Menghasilkan lulusan dengan life skill /kompetensi yang menunjang
            kebutuhan dunia pendidikan maupun du/di (dunia usaha/dunia kerja)
          </h5>
        </div>
      </div>
    );
  }
}

export default Beranda;
