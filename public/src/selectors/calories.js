import moment from "moment";

export default (calories, { text, sortBy, startDate, endDate }) => {
  return calories
    .filter(calorie => {
      const createdAtMoment = moment(calorie.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = calorie.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "Calorie Amount") {
        return a.calories < b.calories ? 1 : -1;
      }
    });
};
