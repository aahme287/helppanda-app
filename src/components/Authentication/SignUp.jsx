import React, { Component } from "react";
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
      .post("http://localhost:3000/users/signup", {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        email: this.refs.email.value,
        password: this.refs.password.value,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          success: true,
          token: response.data.token,
        });
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="form col-4 mx-auto">
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
    );
  }
}
export default SignUp;
