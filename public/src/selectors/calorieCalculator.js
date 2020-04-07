export default (calories) => {
  if (calories.length === 0) {
    return 0;
  } else {
    return calories
      .map((calorie) => calorie.calories)
      .reduce((sum, value) => {
        return sum + value;
      }, 0);
  }
};
