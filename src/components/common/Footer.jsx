import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-center text-white pt-4">
      <section>
        <div className="row">
          <div className="col-12 pt-3">
            <h5 className="text-uppercase pb-3 ">Quick Access</h5>
            <ul className="list-unstyled pb-3 ">
              <li className="p-2">
                <NavLink to="/" className="footer-quick-link">
                  Home
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/incidents" className="footer-quick-link">
                  Incidents
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />

      <section className="row text-center">
        <div className="col-12">
          <a
            className="text-info"
            href="https://github.com/attajey"
            target="__blank"
          >
            <p className="btn btn-dark">
              <i className="fa fa-copyright fa-flip-horizontal"></i>
              &nbsp;COPYLEFT &nbsp;2021 &nbsp;HELPPANDA
            </p>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
