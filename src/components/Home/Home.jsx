import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Home = ({ title }) => {
  document.title = "Home";
  return (
    <Fragment>
        <section className="px-4 py-5 my-5 text-center">
          <img className="d-block mx-auto mb-4" src="/images/logo-md.png" alt=""></img>
          <h1 className="display-5 fw-bold">Simplified Incident Management</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Simple and easy to use ticket/incident management system for rest of us.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <NavLink to="/incidents" className="btn btn-primary btn-lg px-4 gap-3">List Incidents</NavLink>
            </div>
          </div>
        </section>
    </Fragment>
  );
};

export default Home;
