export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

export const sortByCalorieAmount = () => ({
  type: "SORT_BY_CALORIE_AMOUNT",
});

export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

export const sortByCalorieBurnt = () => ({
  type: "SORT_BY_CALORIE_BURNT",
});
