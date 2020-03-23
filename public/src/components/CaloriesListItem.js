import React from "react";

import { Link } from "react-router-dom";

const CaloriesListItem = ({
  dispatch,
  id,
  description,
  calories,
  createdAt
}) => (
  <div className="caloriesListStyle">
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {calories} - {createdAt}
    </p>
  </div>
);

export default CaloriesListItem;
