import React from "react";
import { connect } from "react-redux";
import FoodForm from "./FoodForm";
import { startEditCalories, startRemoveCalories } from "../actions/calories";

const editItemPage = (props) => {
  return (
    <div className="page_header">
      <div className="content_container">
        <h1 className="page_title">Let's make a change!</h1>
        <FoodForm
          calorie={props.calorie}
          onSubmit={(calorie) => {
            props.dispatch(startEditCalories(props.calorie.id, calorie));
            props.history.push("/");
          }}
        />
        <div className="content_button">
          <button
            onClick={() => {
              props.dispatch(startRemoveCalories({ id: props.calorie.id }));
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
    calorie: state.calories.find(
      (calorie) => calorie.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(editItemPage);
