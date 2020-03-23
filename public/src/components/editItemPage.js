import React from "react";
import { connect } from "react-redux";
import FoodForm from "./FoodForm";
import { editCalories, removeFood } from "../actions/calories";

const editItemPage = props => {
  return (
    <div>
      <FoodForm
        calorie={props.calorie}
        onSubmit={calorie => {
          props.dispatch(editCalories(props.calorie.id, calorie));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeFood({ id: props.calorie.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    calorie: state.calories.find(
      calorie => calorie.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(editItemPage);
