import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content_container">
      <div className="header_content">
        <Link to="/dashboard" className="header_title ">
          <h1>FitBud</h1>
        </Link>
        <button onClick={startLogout} className="addLoginButton">
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
