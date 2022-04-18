import React, {Fragment } from "react";
import { NavLink } from "react-router-dom";

const List = (props) => {
  return (
    <Fragment>
      <section>
        <h1 className="display-5">List of Incidents</h1>
        <div className="table-responsive">
          {/* <a className="btn btn-primary" href="/incidents/create" role="button">Create Incident</a> */}
          <NavLink className="btn btn-primary mb-3" to="/incidents/create">
            Create Incident
          </NavLink>
          <br />
          <table className="table table-bordered table-striped table-hover">
            <thead  >
              <tr>
                <th className="text-left">Title</th>
                <th className="text-left">Description</th>
                <th className="text-center">Priority</th>
                <th className="text-center">Tags</th>
                <th className="text-right col-action">Actions</th>
              </tr>
            </thead>
              <tbody>
              {props.incidents.map((item, i) => (
                <tr key={i}>
                  <td className="text-left">{item.title}</td>
                  <td className="text-left">{item.description}</td>
                  <td className="text-center">
                    {item.priority === 'high' ? (
                      <span className="badge rounded-pill bg-danger text-light">{item.priority}</span>
                    ) : (
                      <span className="badge rounded-pill bg-secondary text-light">{item.priority}</span>
                    )}


                    
                    </td>
                  <td className="text-center tags">
                    {item.tags.map((value, index) => {
                      return <span key={index} className="badge bg-light text-dark">{value}</span>
                    })}
                  </td>

                  <td className="text-right">
                    <NavLink
                      className="btn btn-outline-primary btn-sm"
                      to="/incidents/update"
                      onClick={props.updateCurrentIncident.bind(this, item)}
                    >
                      <i className="fa fa-pencil"></i>
                    </NavLink> <a
                      className="btn btn-outline-danger btn-sm"
                      href="/incidents"
                      onClick={(e) => { props.deleteCurrentIncident(e, item);}}><i className="fa fa-trash"></i>
                    </a>
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
