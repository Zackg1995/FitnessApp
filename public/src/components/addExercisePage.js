import React from "react";
import ExerciseForm from "./ExerciseForm";
import { connect } from "react-redux";
import { startAddExercise } from "../actions/exercise";

const addExercisePage = (props) => (
  <div>
    <div className="page_header_form">
      <div className="content_container">
        <h1 className="page_title">What training have we done today?</h1>
        <ExerciseForm
          onSubmit={(exercises) => {
            props.dispatch(startAddExercise(exercises));
            props.history.push("/exercise");
          }}
        />
      </div>
    </div>
  </div>
);

export default connect()(addExercisePage);
