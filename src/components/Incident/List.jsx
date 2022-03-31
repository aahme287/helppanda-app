import React, { Component, Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/incidents/delete/", props.item._id)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  return (
    <Fragment>
      <section className="row p-5">
        <h1 className="pb-5">List of Incidents</h1>

        <br />
        <div className="table-responsive">
          {/* <a className="btn btn-primary" href="/incidents/create" role="button">Create Incident</a> */}
          <NavLink className="btn btn-primary mb-3" to="/incidents/create">
            Create Incident
          </NavLink>
          <br />
          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr>
                <td className="text-center">Title</td>
                <td className="text-center">Description</td>
                <td className="text-center">Priority</td>
                <td className="text-center">Tags</td>
                <td className="text-center" colSpan="2">
                  Actions
                </td>
              </tr>
              {props.incidents.map((item) => (
                <tr key={uuidv4()}>
                  <td className="text-center">{item.title}</td>
                  <td className="text-center">{item.description}</td>
                  <td className="text-center">{item.priority}</td>
                  <td className="text-center">{item.tags}</td>

                  <td className="text-center">
                    <NavLink
                      className="btn btn-primary btn-sm"
                      to="/incidents/update"
                      onClick={props.updateCurrentIncident.bind(this, item)}
                    >
                      <i className="fa fa-pencil"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-danger btn-sm"
                      // href=""
                      to=""
                      onClick={props.deleteCurrentIncident.bind(this, item)}
                    >
                      <i className="fa fa-trash"></i>
                    </NavLink>
                    {/* <a
                      href="/incidents/update"
                      className="btn btn-primary btn-sm"
                      onClick={props.updateCurrentIncident.bind(this, item)}
                    ></a> */}
                    {/* <a href="" className="btn btn-danger btn-sm">
                      <i className="fa fa-trash"></i>
                    </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};

export default List;
