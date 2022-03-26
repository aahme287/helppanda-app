import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Home/Home";
import List from  "../components/Incident/List"
import Form from  "../components/Incident/Form"

const Main = (props) => {

    return (
        <MainLayout>
            <Switch>
                <Route path="/incidents/create" component={Form} />
                <Route path="/incidents" component={List}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </MainLayout>
    );
};

export default Main;