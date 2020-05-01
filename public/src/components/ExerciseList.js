import React from "react";
import { connect } from "react-redux";
import ExerciseListItem from "./ExerciseListItem";
import selectExercise from "../selectors/exercise";

const ExerciseList = (props) => (
  <div className="content_container">
    <div className="list-header">
      <div className="for-mobile">Exercise & Calories Burnt</div>
      <div className="for-desktop">Exercise</div>
      <div className="for-desktop">Calories Burnt</div>
    </div>
    <div className="list-body">
      {props.exercises.length === 0 ? (
        <div className="item-list list-message">
          {" "}
          <span>Nothing to see here!</span>
        </div>
      ) : (
        props.exercises.map((exercise) => {
          return <ExerciseListItem key={exercise.id} {...exercise} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    exercises: selectExercise(state.exercise, state.filters),
  };
};

export default connect(mapStateToProps)(ExerciseList);
