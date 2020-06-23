import React, { Component } from "react";
import PricingItem from "./PricingItem";
import "./pricing.css";

const pegawai = [
  {
    icon: "fas fa-check",
    paket: "Program Aplikasi Perkantoran",
    harga: "750k",
    service1: "Windows Introduction",
    service2: "Microsoft Word",
    service3: "Microsoft Excel",
    service4: "Microsoft Power Point",
    service5: "Printing",
    service6: "Internet",
    service7: "KOKO",
    service8: ""
  },
  {
    icon: "fas fa-check",
    paket: "Program Aplikasi Perkantoran",
    harga: "750k",
    service1: "Corel Draw",
    service2: "Adobe Photoshop",
    service3: "",
    service4: "",
    service5: "",
    service6: "",
    service7: "",
    service8: ""
  }
];
class Pricing extends Component {
  render() {
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {pegawai.map((item, index) => {
              return <PricingItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
