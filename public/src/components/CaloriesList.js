import React from "react";
import { connect } from "react-redux";
import CaloriesListItem from "./CaloriesListItem";
import selectCalories from "../selectors/calories";

const CaloriesList = props => (
  <div className="container">
    <h1 className="headerOne">Calories List</h1>
    {props.calories.map(calorie => {
      return <CaloriesListItem key={calorie.id} {...calorie} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    calories: selectCalories(state.calories, state.filters)
  };
};

export default connect(mapStateToProps)(CaloriesList);
