import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import FitnessDashboardPage from "../components/FitnessDashboardPage";
import addItemPage from "../components/addItemPage";
import editItemPage from "../components/editItemPage";
import helpPage from "../components/helpPage";
import notFoundPage from "../components/notFoundPage";
import Header from "../components/header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={FitnessDashboardPage} exact={true} />
        <Route path="/create" component={addItemPage} />
        <Route path="/edit/:id" component={editItemPage} />
        <Route path="/help" component={helpPage} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
