import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Form = ({ title }) => {
  document.title = "Form";
  return (
    <Fragment>
        <section className="row text-center">
        <div className="mx-auto col-6">
            <h1 className="text-center pt-5"></h1>
            <form className="form p-5" method="post">
                <div className="form-group">
                    <input type="hidden"
                        name="id"
                        value="<%= incident._id %>"
                    />
                    <label for="itemTextField">Title</label>
                    <input type="text" className="form-control"
                        id="nameTextField"
                        placeholder="Enter Your Title"
                        name="title" 
                        value=""
                        required/>
                </div>
                <br />
                <div className="form-group">
                    <label for="descriptionTextArea">Description</label>
                    <textarea 
                    id="descriptionTextArea" 
                    className="form-control"
                    name="description" 
                    placeholder="Enter A Description For Incident"
                    value=""
                    rows="4" 
                    cols="50"
                    required ></textarea>
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Select Priority</label>
                    <select  className="form-control" id="exampleFormControlSelect2" name="priority">
                        <option value="low" >Low</option>
                        <option value="normal" selected>Normal</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <br />
                <div className="form-group">
                    <label for="statusTextField">Tags</label>
                    <input type="text" className="form-control"
                    id="emailTextField"
                    placeholder="Enter Incident Tags"
                    name="tags" 
                    value=""
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
};

export default Form;
