import React from "react";
import { connect } from "react-redux";
import FoodForm from "./FoodForm";
import { startEditExercise, startRemoveExercise } from "../actions/exercise";

const editExercisePage = (props) => {
  return (
    <div className="page_header">
      <div className="content_container">
        <h1 className="page_title">Let's make a change!</h1>
        <FoodForm
          exercise={props.exercise}
          onSubmit={(exercise) => {
            props.dispatch(startEditExercise(props.exercise.id, exercise));
            props.history.push("/");
          }}
        />
        <div className="content_button">
          <button
            onClick={() => {
              props.dispatch(startRemoveExercise({ id: props.exercise.id }));
              props.history.push("/");
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
    exercise: state.exercise.find(
      (exercise) => exercise.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(editExercisePage);
