import React, { Component, Fragment } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

class SingleIncident extends Component {
  constructor(props) {
    super(props);
  }

  submitIncident(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost:3000/incidents/update/" + this.props.incident._id,
        {
          // _id: this.props.incident._id,
          title: this.refs.title.value,
          description: this.refs.description.value,
          priority: this.refs.priority.value,
          tags: this.refs.tags.value,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <section className="row text-center">
          <div className="mx-auto col-6">
            <h1 className="text-center pt-5">Update An Incident</h1>
            <form
              className="form p-5"
              onSubmit={this.submitIncident.bind(this)}
            >
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  ref="title"
                  defaultValue={this.props.incident.title}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  defaultValue={this.props.incident.discription}
                  ref="description"
                  required
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="priority">Select Priority</label>
                <select className="form-control" id="priority" ref="priority">
                  <option defaultValue="low">Low</option>
                  <option defaultValue="normal">Normal</option>
                  <option defaultValue="high">High</option>
                </select>
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  defaultValue={this.props.incident.tags}
                  ref="tags"
                />
              </div>
              <br />

              <button
                className="btn btn-primary mx-2"
                type="submit"
                onClick={(event) => (window.location.href = "/incidents")}
              >
                <i className="fa fa-edit mx-2"></i>
                Submit
              </button>

              <NavLink to="/incidents" className="btn btn-warning mx-2">
                <i className="fa fa-undo mx-2"></i>
                Cancel
              </NavLink>
              {/* <a
                className="btn btn-danger mx-2"
                href="/incidents"
                // onClick={this.props.deleteCurrentIncident.bind(
                //   this,
                //   this.props.item
                // )}
              >
                Delete
              </a>
              <NavLink to="" className="btn btn-danger mx-2">
                Delete
              </NavLink> */}
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SingleIncident;
