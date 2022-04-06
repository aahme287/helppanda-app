import React, { Component, Fragment } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      token: "",
    };
  }

  submitUser(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost:3000/users/signup",
        {
          name: this.refs.firstName.value,
          email: this.refs.email.value,
          password: this.refs.password.value,
        },
        {
          headers: {
            authorization: this.props.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        this.setState({
          success: true,
          token: response.data.token,
        });
        console.log(response.data.token);
        this.props.isUserLoggedIn.bind(this, true);
      })
      .catch((error) => {
        console.log(error);
        this.props.isUserLoggedIn.bind(this, false);
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              You are signed up. Please go to Login page and use your
              credentioals.
            </p>
          </section>
        ) : (
          <form
            className="form col-4 mx-auto"
            onSubmit={this.submitUser.bind(this)}
          >
            <h3>Sign Up</h3>
            <div className="form-group pb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                ref="firstName"
              />
            </div>
            <div className="form-group pb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                ref="lastName"
              />
            </div>
            <div className="form-group pb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                ref="email"
              />
            </div>
            <div className="form-group pb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref="password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              <a href="/login"> Already registered ? Sign in.</a>
            </p>
          </form>
        )}
      </Fragment>
    );
  }
}

export default SignUp;
