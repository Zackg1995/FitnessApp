import React from "react";
import CaloriesList from "./CaloriesList";
import CaloriesListFilters from "./caloriesListFilters";

const FitnessDashboardPage = () => (
  <div>
    <CaloriesListFilters />
    <CaloriesList />
  </div>
);

export default FitnessDashboardPage;
