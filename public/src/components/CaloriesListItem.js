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
  <Link to={`/edit/${id}`} className="item-list">
    <div>
      {" "}
      <h3 className="list-title">{description}</h3>{" "}
      <span className="date-title">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>{" "}
    </div>
    <h3 className="amount-title">Amount of calories: {calories}</h3>
  </Link>
);

export default CaloriesListItem;
