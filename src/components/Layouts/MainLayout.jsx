import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import TopNav from "./Navs/TopNav";
import Footer from "./Navs/Footer";

const MainLayout = (props) => {
  return (
    <Fragment>
      <TopNav />
      <main className="container p-3 text-white">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default withRouter(MainLayout);
