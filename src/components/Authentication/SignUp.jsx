import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Identity from "../../lib/identity";


  class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        success: false,
        token: "",
      };
      this.user = Identity.get()
      console.log('signup state:', props)
  
      if(this.user && this.user._id) {
        this.title = "Update Profile"
      } else {
        this.title = "Signup"
        this.user = {}
      }

      if(this.user && this.user._id) {
        this.button = "Update"
      } else {
        this.button = "Signup"
        this.user = {}
      }
    }

  submitUser(event) {
    event.preventDefault();

    if(this.refs.password.value !== this.refs.repassword.value) {
      alert('Password does not match');
      return;
    }

    let url, method, headers, data
    data = {
      name: this.refs.name.value,
      email: this.refs.email.value,
    }
    if(this.user && this.user._id) {
      method = 'put'
      url = "http://localhost:3000/users/" + this.user._id
      headers = {
        authorization: this.user.token
      }
      if(this.refs.password.value) { // pass only if provided
        data.password = this.refs.password.value
      }
    } else {
      method = 'post'
      url = 'http://localhost:3000/users/signup'
      headers = {}
      data.password = this.refs.password.value
    }
    
    console.log(method, url, data, headers)
    axios({
        method,
        url,
        data,
        headers,
      }).then((response) => {
        console.log(response);
        this.setState({
          success: true,
          token: response.data.token,
        });
        console.log(response.data.token);
        Identity.set(response.data.user)

      }).catch((error) => {
        console.log(error);
        if(error.response) {
          alert(error.response.data.message)
        }
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
              credentials.
            </p>
          </section>
        ) : (
          <section>
            <header className="mx-auto">
              
            </header>

            <form
            className="form col-5 mx-auto"
            onSubmit={this.submitUser.bind(this)}
          >
            <h1 className="display-6 pb-4">{this.title}</h1>
            <div className="form-group pb-3">
              <label>Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                ref="name"
                required
                defaultValue={this.user.name}
              />
            </div>
            <div className="form-group pb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                ref="email"
                required
                defaultValue={this.user.email}
              />
            </div>
            <hr />
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
              <label>Retype password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref="repassword"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              {this.button}
            </button>
            <p className="forgot-password text-right">
              <a href="/login"> Already registered ? Sign in.</a>
            </p>
          </form>
          </section>
          
        )}
      </Fragment>
    );
  }
}

export default withRouter(SignUp);
