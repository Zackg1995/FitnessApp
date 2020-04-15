import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer_content_container">
          <div>
            <Link to="/dashboard">
              <img className="loader-img" src="/images/home.png" />
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
