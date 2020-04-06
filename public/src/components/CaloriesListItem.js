import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const CaloriesListItem = ({
  dispatch,
  id,
  description,
  calories,
  createdAt,
}) => (
  <div className="caloriesListStyle">
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount of calories: {calories} </p>
    <p> {moment(createdAt).format("MMMM Do, YYYY")}</p>
  </div>
);

export default CaloriesListItem;
