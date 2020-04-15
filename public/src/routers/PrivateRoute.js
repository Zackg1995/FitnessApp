import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export const PrivateRoute = ({
  authenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      authenticated ? (
        <div>
          <Header />
          <Component {...props} />
          <Footer />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
