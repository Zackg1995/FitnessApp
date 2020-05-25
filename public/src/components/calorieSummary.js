import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectCalories from "../selectors/calories";
import calorieCalculator from "../selectors/calorieCalculator";

const CalorieSummary = ({ calorieTotal }) => {
  const formatCalories = numeral(calorieTotal).format("000");
  return (
    <div>
      <h1 className="page_title">Let's have a look at what you've eaten</h1>
      <h1 className="page_title">Total calorie intake: {formatCalories} </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleCalories = selectCalories(state.calories, state.filters);

  return {
    calorieCount: visibleCalories.length,
    calorieTotal: calorieCalculator(visibleCalories),
  };
};

export default connect(mapStateToProps)(CalorieSummary);
