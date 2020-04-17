import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import FitnessDashboardPage from "../components/FitnessDashboardPage";
import addItemPage from "../components/addItemPage";
import editItemPage from "../components/editItemPage";
import helpPage from "../components/helpPage";
import notFoundPage from "../components/notFoundPage";
import Login from "../components/loginPage";
import News from "../components/newsPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={FitnessDashboardPage} />
        <PrivateRoute path="/create" component={addItemPage} />
        <PrivateRoute path="/edit/:id" component={editItemPage} />
        <PrivateRoute path="/help" component={helpPage} />
        <PrivateRoute path="/news" component={News} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
