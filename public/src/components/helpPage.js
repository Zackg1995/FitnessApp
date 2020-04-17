import React from "react";
import { NavLink } from "react-router-dom";
import BMIForm from "./bmi";

const helpPage = () => (
  <div className="page_header">
    <div className="content_container">
      <div className="avatar">
        <img src="/images/avatar.png" />
        <div className="speech-bubble bubble">
          <p>
            From fitness fads to diet plans, generally people do not pay much
            attention to their BMI. Whilst not absolute due to every individual
            being different the BMI scale is a great place to start in terms of
            health and well-being. Give it a go on the calculator below and see
            where you land on the scale!
          </p>
        </div>
      </div>

      <div className="bmi_form">
        {" "}
        <BMIForm />
      </div>
    </div>
  </div>
);

export default helpPage;
