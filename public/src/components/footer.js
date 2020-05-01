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
              <img className="loader-img" src="/images/foodDashboard.png" />
            </Link>
            <Link to="/create">
              <img className="loader-img" src="/images/addFood.png" />
            </Link>
            <Link to="/news">
              <img className="loader-img" src="/images/homePage.png" />
            </Link>
            <Link to="/createExercise">
              <img className="loader-img" src="/images/addExercise.png" />
            </Link>
            <Link to="/exercise">
              <img className="loader-img" src="/images/exerciseDashboard.png" />
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
