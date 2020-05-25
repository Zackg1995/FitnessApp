import React from "react";
import ExerciseList from "./ExerciseList";
import ExerciseListFilters from "./ExerciseListFilters";
import ExerciseSummary from "./exerciseSummary";

const ExerciseDashboardPage = () => (
  <div className="page_header_form">
    <div className="content_container">
      <ExerciseSummary />
      <ExerciseListFilters />
      <ExerciseList />
    </div>
  </div>
);

export default ExerciseDashboardPage;
