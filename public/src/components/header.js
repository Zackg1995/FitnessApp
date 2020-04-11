import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <div className="header">
    <div className="headerContainer">
      <header>
        <h1 className="header_title">FitBud</h1>
        <NavLink
          to="/"
          className="nav"
          activeClassName="is-active"
          exact={true}
        >
          Home Page
        </NavLink>
        <NavLink to="/create" className="nav" activeClassName="is-active">
          Adding Items Page
        </NavLink>
        <NavLink to="/help" className="nav" activeClassName="is-active">
          Help Page
        </NavLink>
        <button onClick={startLogout}>Logout</button>
      </header>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
