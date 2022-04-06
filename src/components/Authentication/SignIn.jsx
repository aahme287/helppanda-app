import React, { Component, Fragment } from "react";
import axios from "axios";

class SignIn extends Component {
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
        "http://localhost:3000/users/signin",
        {
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
        this.props.isUserLoggedIn.bind(this, this.state.success);
        // localStorage.setItem("isLoggedIn", true);
        // console.log(this.props.isUserLoggedIn.value);
      })
      .catch((error) => {
        // this.setState({
        //   success: false,
        //   token: "",
        // });
        // localStorage.setItem("isLoggedIn", this.success);

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
              <a href="/">Go to Home</a>
            </p>
          </section>
        ) : (
          <form
            className="form col-4 mx-auto"
            onSubmit={this.submitUser.bind(this)}
          >
            <h3>Sign In</h3>
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
            <div className="form-group pb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Submit
            </button>
            <p className="forgot-password text-right">
              <a href="/signup">Sign Up ? </a>
            </p>
          </form>
        )}
      </Fragment>
    );
  }
}
export default SignIn;
