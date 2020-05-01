const exerciseReducerDefaultState = [];

export default (state = exerciseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADDEXERCISE":
      return state.concat(action.exercise);
    case "REMOVEEXERCISE":
      return state.filter(({ id }) => id !== action.id);
    case "EDITEXERCISE":
      return state.map((exercises) => {
        if (exercises.id === action.id) {
          return {
            ...exercises,
            ...action.updates,
          };
        } else {
          return exercises;
        }
      });
    case "SETEXERCISE":
      return action.exercises;
    default:
      return state;
  }
};
