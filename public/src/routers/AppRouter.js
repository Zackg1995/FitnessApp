import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import FitnessDashboardPage from "../components/FitnessDashboardPage";
import ExerciseDashboardPage from "../components/ExerciseDashboardPage";
import addItemPage from "../components/addItemPage";
import addExercisePage from "../components/addExercisePage";
import editItemPage from "../components/editItemPage";
import editExercise from "../components/editExercise";
import helpPage from "../components/helpPage";
import notFoundPage from "../components/notFoundPage";
import Login from "../components/loginPage";
import TotalDisplay from "../components/totalDisplay";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={FitnessDashboardPage} />
        <PrivateRoute path="/exercise" component={ExerciseDashboardPage} />
        <PrivateRoute path="/create" component={addItemPage} />
        <PrivateRoute path="/createExercise" component={addExercisePage} />
        <PrivateRoute path="/edit/:id" component={editItemPage} />
        <PrivateRoute path="/editExercise/:id" component={editExercise} />
        <PrivateRoute path="/help" component={helpPage} />
        <PrivateRoute path="/news" component={TotalDisplay} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
