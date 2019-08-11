import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "../components/Home";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/home/" component={Home} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
