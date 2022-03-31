import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Home = ({ title }) => {
  document.title = "Home";
  return (
    <Fragment>
      <section className="row text-center mb-5 pb-5">
        <img src="/images/logo.png" alt="LOGO" className="home-logo mt-5" />
        <h2 className="mb-5">Welcome to HelpPanda</h2>
        <h5 className="pb-5 mb-5">
          To see the incidents, go to Incidents from menu
        </h5>
      </section>
    </Fragment>
  );
};

export default Home;
