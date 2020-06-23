import React from "react";
import PageWrapper from "./component/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Header from "./component/Common/Header";
import Section from "./component/Common/Section";
import Employee from "./component/Common/Employee";
import Showcase from "./component/Common/Showcase";
import Pricing from "./component/Common/Pricing";
import SlideKegiatan from "./component/Common/SlideKegiatan";
import About from "./component/Common/About";

function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Header} />
          <Route path="/section" component={SlideKegiatan} />
          <Route path="/employee" component={Employee} />
          <Route path="/about" component={About} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/pricing" component={Pricing} />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
