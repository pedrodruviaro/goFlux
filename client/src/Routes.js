import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./hooks/useAuth";
import { Offers } from "./pages/Offers";
import { SingleOffer } from "./pages/SingleOffer";

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
                                pathname: "/",
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
            <PrivateRoute path="/offers" component={Offers} />
            <PrivateRoute path="/offer/:id" component={SingleOffer} />
        </Switch>
    );
}
