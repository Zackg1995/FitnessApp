import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import FitnessDashboardPage from "../components/FitnessDashboardPage";
import addItemPage from "../components/addItemPage";
import editItemPage from "../components/editItemPage";
import helpPage from "../components/helpPage";
import notFoundPage from "../components/notFoundPage";
import Header from "../components/header";
import Login from "../components/loginPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={FitnessDashboardPage} />
        <Route path="/create" component={addItemPage} />
        <Route path="/edit/:id" component={editItemPage} />
        <Route path="/help" component={helpPage} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
