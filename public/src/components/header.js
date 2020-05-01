import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content_container">
      <div className="header_content">
        <Link to="/help">
          <img className="loader-img" src="/images/help.png" />
        </Link>
        <Link to="/dashboard" className="header_title ">
          <img src="/images/Fit-bud.png" height="70" width="150" />
        </Link>
        <button onClick={startLogout} className="addLogoutButton">
          <h1>Logout</h1>
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
