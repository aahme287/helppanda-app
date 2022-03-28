import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Home/Home";
import List from "../components/Incident/List";
import Form from "../components/Incident/Form";
import SingleIncident from "../components/Incident/SingleIncident";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: [],
      currentIncident: {},
    };

    this.updateCurrentIncident = this.updateCurrentIncident.bind(this);
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
  render() {
    return (
      <MainLayout>
        <Switch>
          {/* <Route path="/incidents/create" component={Form} /> */}
          <Route path="/incidents/update">
            <SingleIncident incident={this.state.currentIncident} />
          </Route>
          <Route path="/incidents/create">
            <Form incident={this.state.currentIncident} />
          </Route>
          <Route path="/incidents">
            <List
              incidents={this.state.incidents}
              updateCurrentIncident={this.updateCurrentIncident}
            />
          </Route>
          {/* <Route path="/incidents" component={List}/> */}
          <Route path="/" exact component={Home} />
        </Switch>
      </MainLayout>
    );
  }
}

export default Main;
