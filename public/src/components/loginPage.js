import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = ({ startLogin }) => (
  <div className="loginLayout">
    <div className="loginLayout_box">
      <h1 className="loginLayout_title">FitBud</h1>
      <p>Here to help!</p>
      <button onClick={startLogin} className="btn">
        Login with Google!
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Login);
