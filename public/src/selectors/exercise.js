import moment from "moment";

export default (exercises, { text, sortBy, startDate, endDate }) => {
  return exercises
    .filter((exercise) => {
      const createdAtMoment = moment(exercise.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = exercise.exercises
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "Calorie Burnt") {
        return a.caloriesBurnt < b.caloriesBurnt ? 1 : -1;
      }
    });
};
