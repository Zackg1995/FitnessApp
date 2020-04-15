import React from "react";
import { connect } from "react-redux";
import CaloriesListItem from "./CaloriesListItem";
import selectCalories from "../selectors/calories";

const CaloriesList = (props) => (
  <div className="content_container">
    <div className="list-header">
      <div className="for-mobile">Food & Calories</div>
      <div className="for-desktop">Food</div>
      <div className="for-desktop">Calories</div>
    </div>
    <div className="list-body">
      {props.calories.length === 0 ? (
        <div className="item-list list-message">
          {" "}
          <span>Nothing to see here!</span>
        </div>
      ) : (
        props.calories.map((calorie) => {
          return <CaloriesListItem key={calorie.id} {...calorie} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    calories: selectCalories(state.calories, state.filters),
  };
};

export default connect(mapStateToProps)(CaloriesList);
