import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Form extends Component {
  submitIncident(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/incidents/create", {
        // _id: this.refs._id.value,
        title: this.refs.title.value,
        description: this.refs.description.value,
        priority: this.refs.priority.value,
        tags: this.refs.tags.value,
      })
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
            <h1 className="text-center pt-5">Add a new incident</h1>
            <form
              className="form p-5"
              onSubmit={this.submitIncident.bind(this)}
            >
              <div className="form-group">
                {/* <input
                  type="hidden"
                  name="id"
                  ref="id"
                /> */}

                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  //placeholder="Enter Your Title"
                  //ref="title"
                  ref="title" //{(title) => (this.title = title)}
                  //name="title"
                  //value={props.incident.title}
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
                  //   name="description"
                  //   placeholder="Enter A Description For Incident"
                  //   value={props.incident.discription}
                  ref="description" //{(description) => (this.description = description)}
                  //rows="4"
                  //cols="50"
                  required
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="priority">Select Priority</label>
                <select
                  className="form-control"
                  id="priority"
                  ref="priority" //{(priority) => (this.priority = priority)}
                  //   name="priority"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  //   placeholder="Enter Incident Tags"
                  //   name="tags"
                  //   value={props.incident.tags}
                  ref="tags" //{(tags) => (this.tags = tags)}
                />
              </div>
              <br />

              <button className="btn btn-primary mx-2" type="submit">
                <i className="fa fa-edit mx-2"></i>
                Submit
              </button>

              <NavLink to="/incidents" className="btn btn-warning mx-2">
                <i className="fa fa-undo mx-2"></i>
                Cancel
              </NavLink>

              <NavLink to="" className="btn btn-danger mx-2">
                Delete
              </NavLink>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Form;
