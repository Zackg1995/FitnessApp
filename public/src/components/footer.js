import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer_content_container">
          <div className="image_content">
            {" "}
            <Link to="/dashboard">
              <img className="loader-img" src="/images/home.png" />
            </Link>
            <Link to="/create">
              <img className="loader-img" src="/images/add.png" />
            </Link>
            <Link to="/help">
              <img className="loader-img" src="/images/help.png" />
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
