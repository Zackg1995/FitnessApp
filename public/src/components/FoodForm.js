import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const date = moment();

export default class FoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.calorie ? props.calorie.description : "",
      note: props.calorie ? props.calorie.note : "",
      calories: props.calorie ? props.calorie.calories.toString() : "",
      createdAt: props.calorie ? moment(props.calorie.createdAt) : moment(),
      calanderFocused: false,
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onChangeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onCaloriesChange = (e) => {
    const calories = e.target.value;
    if (!calories || calories.match(/^\d{1,}(\.\d{0,0})?$/)) {
      this.setState(() => ({ calories }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calanderFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.calories) {
      this.setState(() => ({ error: "Please provide details" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        calories: parseFloat(this.state.calories, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        {this.state.error && <p className="form_error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          className="text_input"
        ></input>
        <input
          type="text"
          placeholder="Calories"
          value={this.state.calories}
          onChange={this.onCaloriesChange}
          className="text_input"
        />
        <textarea
          placeholder="Add a note for the addition of food"
          value={this.state.note}
          onChange={this.onChangeNote}
          className="textarea"
        ></textarea>
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calanderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <div>
          <button className="btn">Save Food!</button>
        </div>
      </form>
    );
  }
}
