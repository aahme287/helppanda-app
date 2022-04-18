import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
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
      <nav className="navbar navbar-expand-md navbar-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/images/logo-sm.png" alt="LOGO" />
          </a>

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
            </ul>
            <div>
            {this.identity ? (
                    <div><Link className="btn btn-sm btn-link text-info" 
                      to={{
                          pathname:"/signup",
                          user: this.identity
                          } 
                      }>{this.identity.email}
                    </Link>
                    <NavLink className="btn btn-sm btn-link text-secondary" to="" onClick={this.userSignOut.bind(this)}>
                    <small>(Sign Out)</small>
                    </NavLink></div>
                    
                ) : (
                  <div className="">
                    <NavLink
                      className="btn btn-link text-light"
                      to="/login"
                      exact
                      activeStyle={{ color: "#63a4c9" }}
                    >
                      <i className="fa fa-user px-2"></i>
                      Log In
                    </NavLink>&nbsp;
                    <NavLink className="btn btn-outline-primary" 
                      to="/signup">Signup
                    </NavLink>
                  </div>
                )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
