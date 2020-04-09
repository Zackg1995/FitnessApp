import React from "react";
import FoodForm from "./FoodForm";
import { connect } from "react-redux";
import { startAddCalories } from "../actions/calories";

const addItemPage = (props) => (
  <div className="container">
    <h1 className="headerOne">What did you eat?</h1>
    <FoodForm
      onSubmit={(calories) => {
        props.dispatch(startAddCalories(calories));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(addItemPage);
