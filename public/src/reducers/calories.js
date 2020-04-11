const calorieReducerDefaultState = [];

export default (state = calorieReducerDefaultState, action) => {
  switch (action.type) {
    case "ADDFOOD":
      return state.concat(action.calorie);
    case "REMOVEFOOD":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_CALORIES":
      return state.map((calories) => {
        if (calories.id === action.id) {
          return {
            ...calories,
            ...action.updates,
          };
        } else {
          return calories;
        }
      });
    case "SET_CALORIES":
      return action.calories;
    default:
      return state;
  }
};
