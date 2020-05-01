import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExerciseListItem = ({
  dispatch,
  id,
  exercises,
  caloriesBurnt,
  createdAt,
}) => (
  <Link to={`/editExercise/${id}`} className="item-list">
    <div>
      {" "}
      <h3 className="list-title">{exercises}</h3>{" "}
      <span className="date-title">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>{" "}
    </div>
    <h3 className="amount-title">Amount of calories: {caloriesBurnt}</h3>
  </Link>
);

export default ExerciseListItem;
