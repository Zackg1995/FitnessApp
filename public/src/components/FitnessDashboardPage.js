import React from "react";
import CaloriesList from "./CaloriesList";
import CaloriesListFilters from "./caloriesListFilters";
import CalorieSummary from "./calorieSummary";

const FitnessDashboardPage = () => (
  <div className="page_header_form">
    <div className="content_container">
      <CalorieSummary />
      <CaloriesListFilters />
      <CaloriesList />
    </div>
  </div>
);

export default FitnessDashboardPage;
