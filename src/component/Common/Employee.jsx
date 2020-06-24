import React, { Component } from "react";
import EmployeePerson from "./EmployeePerson";

import img1 from "../img/employee/2.jpeg";
import img2 from "../img/employee/3.jpeg";
import img3 from "../img/employee/4.jpeg";
import img4 from "../img/employee/5.jpeg";
import img5 from "../img/employee/6.jpeg";
import img6 from "../img/employee/7.jpeg";
const pegawai = [
  { img: "", name: "", detail: "" },
  { img: img2, name: "Dedi Naluri,S Sos.,M.SI", detail: "Pimpinan" },
  { img: "", name: "", detail: "" },
  { img: img1, name: "Ade Irma N A,Md", detail: "Pembantu Umum" },
  { img: img3, name: "Reya Mardiyana S.Pd", detail: "Administrasi" },
  { img: img4, name: "Oom Nurmayanti", detail: "Bendahara" },
  { img: img5, name: "Iing Ramdhani", detail: "Kewirausahaan & Manajemen" },
  { img: img6, name: "Bayu Fajar Pratama", detail: "P4- Bimbingan Konsumen" }
];
class Employee extends Component {
  render() {
    return (
      <section className="testimonials text-center ">
        <div className="container">
          <h2 className="mb-5">Susunan Organisasi</h2>
          <div className="row">
            {pegawai.map((item, index) => {
              return <EmployeePerson {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Employee;
