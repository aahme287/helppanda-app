import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: true,
    };
    console.log(this.props.isUserLoggedIn);
  }

  userSignOut(event) {
    event.preventDefault();

    axios
      .get("http://localhost:3000/users/signout")
      .then((response) => {
        console.log(response);
        this.setState({
          success: false,
        });
        // localStorage.setItem("isLoggedIn", false);
        this.props.isUserLoggedInFunc(this.state.success);
      })
      .catch((error) => {
        console.log(error);
      });
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
                {this.props.isUserLoggedIn ? (
                  <div className="pt-2">
                    <NavLink to="" onClick={this.userSignOut.bind(this)}>
                      {" "}
                      Sign Out ?
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
