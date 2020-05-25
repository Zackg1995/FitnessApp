import React from "react";
import { connect } from "react-redux";
import exerciseCalculator from "../selectors/exerciseCalculator";
import calorieCalculator from "../selectors/calorieCalculator";
import selectExercise from "../selectors/exercise";
import selectCalorie from "../selectors/calories";

const TotalDisplay = ({ exerciseTotal, caloriesTotal, caloriesRemaining }) => (
  <div className="page_header">
    <div className="content_container">
      <div className="formatContent">
        {" "}
        <div className="contentStyle">
          <p>
            <h2>
              Total calorie intake ({caloriesTotal}) - Total calories burnt (
              {exerciseTotal}) = {caloriesRemaining}
            </h2>
          </p>
        </div>
      </div>
    </div>
  </div>
);
const mapStateToProps = (state) => {
  const visibleExercise = selectExercise(state.exercise, state.filters);
  const visibleCalorie = selectCalorie(state.calories, state.filters);
  return {
    exerciseTotal: exerciseCalculator(visibleExercise),
    caloriesTotal: calorieCalculator(visibleCalorie),
    caloriesRemaining:
      calorieCalculator(visibleCalorie) - exerciseCalculator(visibleExercise),
  };
};

export default connect(mapStateToProps)(TotalDisplay);
