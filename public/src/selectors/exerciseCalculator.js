export default (exercises) => {
  if (exercises.length === 0) {
    return 0;
  } else {
    return exercises
      .map((exercise) => exercise.caloriesBurnt)
      .reduce((sum, value) => {
        return sum + value;
      }, 0);
  }
};
