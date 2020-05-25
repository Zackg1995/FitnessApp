import React from "react";
import { connect } from "react-redux";
import ExerciseForm from "./ExerciseForm";
import { startEditExercise, startRemoveExercise } from "../actions/exercise";

const editExercisePage = (props) => {
  return (
    <div className="page_header">
      <div className="content_container">
        <h1 className="page_title">Let's make a change!</h1>
        <ExerciseForm
          exercise={props.exercises}
          onSubmit={(exercises) => {
            props.dispatch(startEditExercise(props.exercises.id, exercises));
            props.history.push("/exercise");
          }}
        />
        <div className="content_button">
          <button
            onClick={() => {
              props.dispatch(startRemoveExercise({ id: props.exercises.id }));
              props.history.push("/exercise");
            }}
            className="btn_reverse"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    exercises: state.exercise.find(
      (exercises) => exercises.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(editExercisePage);
