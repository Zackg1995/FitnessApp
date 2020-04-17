import React from "react";
import { connect } from "react-redux";

const News = () => (
  <div className="page_header">
    <div className="content_container">
      <div className="news_container">
        {" "}
        <div className="wrapper-left">
          <img src="/images/fruit.jpg" className="newsPageImgOne" />
        </div>
      </div>
      <div className="news_container">
        {" "}
        <div className="wrapper-right">
          <img src="/images/gym.jpg" className="newsPageImgTwo" />
        </div>
      </div>
      <div className="news_container">
        {" "}
        <div className="wrapper-left">
          <img src="/images/mh.jpg" className="newsPageImgTwo" />
        </div>
      </div>
    </div>
  </div>
);
export default connect()(News);
