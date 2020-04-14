import React from "react";
import FoodForm from "./FoodForm";
import { connect } from "react-redux";
import { startAddCalories } from "../actions/calories";

const addItemPage = (props) => (
  <div className="page_header">
    <div className="content">
      <h1 className="page_title">What did you eat?</h1>
    </div>
    <FoodForm
      onSubmit={(calories) => {
        props.dispatch(startAddCalories(calories));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(addItemPage);
