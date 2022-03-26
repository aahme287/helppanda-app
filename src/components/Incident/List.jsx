import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const List = ({ title }) => {
  document.title = "List";
  return (
    <Fragment>
        <section className="row p-5">
        <h1 className="pb-5">List of Incidents</h1>
        <br/>
        <div className="table-responsive">
            {/* <a className="btn btn-primary" href="/incidents/create" role="button">Create Incident</a> */}
            <NavLink className="btn btn-primary mb-3" to="/incidents/create" >
                Create Incident
            </NavLink>
            <br/>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <th className="text-center">Title</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Priority</th>
                    <th className="text-center">Tags</th>
                    <th className="text-center" colSpan="2" >Actions</th>
                </thead>

                    <tbody>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        
                        <td className="text-center">
                            <NavLink to="" className="btn btn-primary btn-sm">
                            <i className="fa fa-pencil"></i>
                            </NavLink>
                        </td>
                        <td>
                            <NavLink to="" className="btn btn-danger btn-sm">
                            <i className="fa fa-trash"></i></NavLink>
                        </td>
                            
                    </tbody>
            </table>
        </div>

        </section>
    </Fragment>
  );
};

export default List;
