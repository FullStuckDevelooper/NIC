import React, { Component } from "react";
import SectionItem from "./SectionItem";

const item = [
  { icon: "fa-desktop", title: "", subtitle: "" },
  { icon: "", title: "", subtitle: "" }
];

class Section extends Component {
  render() {
    return (
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {item.map((item, index) => {
              return <SectionItem {...item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
