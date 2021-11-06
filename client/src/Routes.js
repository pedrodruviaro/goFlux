import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./hooks/useAuth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authorized } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (authorized) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
