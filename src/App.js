import React from "react";
import PageWrapper from "./component/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Header from "./component/Common/Header";
import Beranda from "./component/Common/Beranda";
import Employee from "./component/Common/Employee";
import Showcase from "./component/Common/Showcase";
import Pricing from "./component/Common/Pricing";
import About from "./component/Common/About";

function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Header} />
          <Route path="/beranda" component={Beranda} />
          <Route path="/organisasi" component={Employee} />
          <Route path="/kegiatan" component={Showcase} />
          <Route path="/about" component={About} />
          <Route path="/harga" component={Pricing} />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
