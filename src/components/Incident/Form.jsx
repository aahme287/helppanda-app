import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.incident = props.incident

    if(this.incident && this.incident._id) {
      this.title = 'Update Incident'
    } else {
      this.title = 'Add new Incident'
    }
  }

  submitIncident(event) {
    event.preventDefault();

    let url;
    if(this.incident && this.incident._id) {
      url = "http://localhost:3000/incidents/update/" + this.incident._id
    } else {
      url = "http://localhost:3000/incidents/create"
    }

    axios
      .post(url, {
        title: this.refs.title.value,
        description: this.refs.description.value,
        priority: this.refs.priority.value,
        tags: this.refs.tags.value,
        createdBy: this.incident.createdBy
      })
      .then((response) => {
        window.location.replace("/incidents")
        console.log(response);
      })
      .catch((error) => {
        if(error.response) {
          alert(error.response.data.message)
        }
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <section className="row">
          <div className="mx-auto col-6">
            <h1 className="text-center pt-5">{this.title}</h1>
            <form
              className="form p-5"
              onSubmit={(e) => { return this.submitIncident(e);}}

            >
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  ref="title"
                  defaultValue={this.incident.title}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  id="description"
                  className="form-control"
                  ref="description"
                  rows="4"
                  required
                  defaultValue={this.incident.description}
                ></textarea>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="priority">Select Priority</label>
                <select defaultValue={this.incident.priority} className="form-control" id="priority" ref="priority">
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
                  defaultValue={this.incident.tags}
                  ref="tags"
                />
              </div>
              <br />

              <button
                className="btn btn-primary mx-2"
                type="submit"
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
                onClick={this.props.deleteCurrentIncident.bind(this, item)}
              >
                Delete
              </a> */}

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
