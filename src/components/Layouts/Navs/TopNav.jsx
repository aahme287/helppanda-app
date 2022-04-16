import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Identity from "../../../lib/identity";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
    };
    this.identity = Identity.get()
    console.log(this.props.isUserLoggedIn);
  }

  userSignOut(event) {
    event.preventDefault();

    if(window.confirm("Are you sure you want to signout?")) {
      Identity.clear()
      window.location.replace("/");
    }
  }

  render() {
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
                {this.identity ? (
                  <div className="pt-2">
                     {this.identity.email}&nbsp;
                    <NavLink to="" onClick={this.userSignOut.bind(this)}>
                      <small>(Sign Out)</small>
                    </NavLink>
                    
                  </div>
                ) : (
                  <div className="">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      exact
                      activeStyle={{ color: "#63a4c9" }}
                    >
                      <i className="fa fa-user px-2"></i>
                      Log In
                    </NavLink>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </nav>
    );
  }
}

export default TopNav;
