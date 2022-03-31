import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Home/Home";
import List from "../components/Incident/List";
import Form from "../components/Incident/Form";
import SingleIncident from "../components/Incident/SingleIncident";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: [],
      currentIncident: {},
    };

    this.updateCurrentIncident = this.updateCurrentIncident.bind(this);
    this.deleteCurrentIncident = this.deleteCurrentIncident.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:3000/incidents";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          incidents: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentIncident(item) {
    this.setState({
      currentIncident: item,
    });
  }

  deleteCurrentIncident(item) {
    axios
      .get("http://localhost:3000/incidents/delete/" + item._id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // this.setState({
    //   currentIncident: "",
    // });
  }
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/incidents/update">
            <SingleIncident incident={this.state.currentIncident} />
          </Route>

          <Route path="/incidents/create">
            <Form
              incident={this.state.currentIncident}
              deleteCurrentIncident={this.deleteCurrentIncident}
            />
          </Route>

          <Route path="/incidents">
            <List
              incidents={this.state.incidents}
              updateCurrentIncident={this.updateCurrentIncident}
              deleteCurrentIncident={this.deleteCurrentIncident}
            />
          </Route>

          <Route path="/" exact component={Home} />
        </Switch>
      </MainLayout>
    );
  }
}

export default Main;
