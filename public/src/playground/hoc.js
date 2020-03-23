import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to see info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

/*ReactDOM.render(
  <AdminInfo isAdmin={true} info="details" />,
  document.getElementById("app")
);*/

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="details" />,
  document.getElementById("app")
);
