import React from "react";
import { Route, Switch } from "react-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
