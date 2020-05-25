import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const date = moment();

export default class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: props.exercise ? props.exercise.exercises : "",
      exerciseNotes: props.exercise ? props.exercise.exerciseNotes : "",
      caloriesBurnt: props.exercise
        ? props.exercise.caloriesBurnt.toString()
        : "",
      createdAt: props.exercise ? moment(props.exercise.createdAt) : moment(),
      calanderFocused: false,
    };
  }

  onExerciseChange = (e) => {
    const exercises = e.target.value;
    this.setState(() => ({ exercises }));
  };

  onExerciseNoteChange = (e) => {
    const exerciseNotes = e.target.value;
    this.setState(() => ({ exerciseNotes }));
  };

  onCaloriesBurntChange = (e) => {
    const caloriesBurnt = e.target.value;
    if (!caloriesBurnt || caloriesBurnt.match(/^\d{1,}(\.\d{0,0})?$/)) {
      this.setState(() => ({ caloriesBurnt }));
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
    if (!this.state.exercises || !this.state.caloriesBurnt) {
      this.setState(() => ({ error: "Please provide details" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        exercises: this.state.exercises,
        caloriesBurnt: parseFloat(this.state.caloriesBurnt, 10),
        exerciseNotes: this.state.exerciseNotes,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        {this.state.error && <p className="form_error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="What exercise took place?"
          autoFocus
          value={this.state.exercises}
          onChange={this.onExerciseChange}
          className="text_input"
        ></input>
        <input
          type="text"
          placeholder="Calories Burnt"
          value={this.state.caloriesBurnt}
          onChange={this.onCaloriesBurntChange}
          className="text_input"
        ></input>
        <textarea
          placeholder="How was the workout?"
          className="textarea"
          value={this.state.exerciseNotes}
          onChange={this.onExerciseNoteChange}
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
          <button className="btn">Save Exercise!</button>
        </div>
      </form>
    );
  }
}
