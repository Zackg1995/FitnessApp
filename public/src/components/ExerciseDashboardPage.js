import React from "react";
import ExerciseList from "./ExerciseList";
import ExerciseListFilters from "./ExerciseListFilters";

const ExerciseDashboardPage = () => (
  <div className="page_header_form">
    <div className="content_container">
      <ExerciseListFilters />
      <ExerciseList />
    </div>
  </div>
);

export default ExerciseDashboardPage;
