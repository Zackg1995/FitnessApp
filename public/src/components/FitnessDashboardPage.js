import React from "react";
import CaloriesList from "./CaloriesList";
import CaloriesListFilters from "./caloriesListFilters";

const FitnessDashboardPage = () => (
  <div className="page_header_form">
    <div className="content_container">
      <CaloriesListFilters />
      <CaloriesList />
    </div>
  </div>
);

export default FitnessDashboardPage;
