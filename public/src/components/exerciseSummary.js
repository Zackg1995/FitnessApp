import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExercise from "../selectors/exercise";
import exerciseCalculator from "../selectors/exerciseCalculator";

const ExerciseSummary = ({ exerciseTotal }) => {
  const formatExercise = numeral(exerciseTotal).format("000");
  return (
    <div>
      <h1 className="page_title">Let's have a look at your workouts!</h1>
      <h1 className="page_title">Total calories burnt: {formatExercise} </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExercise = selectExercise(state.exercise, state.filters);

  return {
    exerciseTotal: exerciseCalculator(visibleExercise),
  };
};

export default connect(mapStateToProps)(ExerciseSummary);
