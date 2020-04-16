import React from "react";
import FoodForm from "./FoodForm";
import { connect } from "react-redux";
import { startAddCalories } from "../actions/calories";

const addItemPage = (props) => (
  <div>
    <div className="page_header_form">
      <div className="content_container">
        <h1 className="page_title">What did you eat?</h1>
        <FoodForm
          onSubmit={(calories) => {
            props.dispatch(startAddCalories(calories));
            props.history.push("/");
          }}
        />
      </div>
    </div>
  </div>
);

export default connect()(addItemPage);
