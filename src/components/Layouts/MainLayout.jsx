import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import TopNav from "./../Navs/TopNav";
import Footer from "./../common/Footer";

const MainLayout = (props) => {
  return (
    <Fragment>
      <TopNav />
      <main className="container-fluid text-white">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default withRouter(MainLayout);
