import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByCalorieBurnt,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

class ExerciseListFilters extends React.Component {
  state = {
    calanderFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calanderFocused) => {
    this.setState(() => ({ calanderFocused }));
  };

  render() {
    return (
      <div className="calorie_list_container">
        <h1 className="page_title">Let's have a look at what you've eaten</h1>
        <div className="group">
          <div className="itemsOfGroup">
            {" "}
            <input
              className="text_input"
              type="text"
              placeholder="Search your food!"
              value={this.props.filters.text}
              onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="itemsOfGroup">
            {" "}
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={(e) => {
                if (e.target.value === "date") {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === "Calorie Burnt") {
                  this.props.dispatch(sortByCalorieBurnt());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="Calorie Amount">Calorie Amount</option>
            </select>
          </div>
          <div className="itemsOfGroup">
            {" "}
            <DateRangePicker
              startDateId="MyDatePicker"
              startDate={this.props.filters.startDate}
              endDateId="your_unique_end_date_id"
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calanderFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExerciseListFilters);
