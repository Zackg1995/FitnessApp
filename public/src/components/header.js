import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
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
      </header>
    </div>
  </div>
);

export default Header;
