import React from "react";
import { NavLink } from "react-router-dom";
import BMIForm from "./bmi";

const helpPage = () => (
  <div className="helpContainer">
    <h1 className="headerOne">Help is here!</h1>
    <div className="contentStyle">
      <p>
        FitBud is created in order to assist it's users with tracking their
        fitness whilst having fun doing it.
      </p>
    </div>
    <div className="contentStyle">
      <p>
        This application has features such as the calorie tracker which allows
        you to add, edit and remove depending on your eating habits!{" "}
      </p>
    </div>
    <NavLink to="/create">
      <button className="addBMI">Click here to get started!</button>
    </NavLink>
    <BMIForm />
  </div>
);

export default helpPage;
