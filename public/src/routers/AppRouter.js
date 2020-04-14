import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import FitnessDashboardPage from "../components/FitnessDashboardPage";
import addItemPage from "../components/addItemPage";
import editItemPage from "../components/editItemPage";
import helpPage from "../components/helpPage";
import notFoundPage from "../components/notFoundPage";
import Login from "../components/loginPage";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={FitnessDashboardPage} />
        <PrivateRoute path="/create" component={addItemPage} />
        <PrivateRoute path="/edit/:id" component={editItemPage} />
        <Route path="/help" component={helpPage} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
