import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Home = ({ title }) => {
  document.title = "Home";
  return (
    <Fragment>
      <section className="row text-center">
        <img src="/images/logo.png" alt="LOGO" className="home-logo" />
        <h2>Welcome to HelpPanda</h2>
        <h5 className="pb-5 mb-5">To see the incidents, go to Incidents from menu</h5>
      </section>
    </Fragment>
  );
};

export default Home;
