import React, { Component } from "react";
import PricingItem from "./PricingItem";
import "./pricing.css";

const program = [
  {
    icon: "fas fa-check",
    paket: "Program Aplikasi Perkantoran",
    harga: "450k",
    service: [
      "Windows Introduction",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft Power Point",
      "Printing",
      "Internet"
    ]
  },
  {
    icon: "fas fa-check",
    paket: "Program Aplikasi Desain",
    harga: "450k",
    service: ["CorelDraw", "Adobe Photoshop"]
  }
];
class Pricing extends Component {
  render() {
    return (
      <section className="pricing py-5">
        <div className="container-fluid">
          <div className="row">
            {program.map((item, index) => {
              return <PricingItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
