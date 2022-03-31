import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="LOGO" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item px-2">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/"
                exact
                activeStyle={{ color: "#63a4c9" }}
              >
                <i className="fa fa-home px-2"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                className="nav-link"
                to="/incidents"
                exact
                activeStyle={{ color: "#63a4c9" }}
              >
                <i className="fa fa-tasks px-2"></i>
                Incidents
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                className="nav-link"
                to="/login"
                exact
                activeStyle={{ color: "#63a4c9" }}
              >
                <i className="fa fa-user px-2"></i>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default TopNav;
