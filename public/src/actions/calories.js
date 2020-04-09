import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";

export const addFood = (calorie) => ({
  type: "ADDFOOD",
  calorie,
});

export const startAddCalories = (caloriesData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      calories = 0,
      createdAt = 0,
    } = caloriesData;
    const calorie = {
      description,
      note,
      calories,
      createdAt,
    };
    return database
      .ref("calories")
      .push(calorie)
      .then((ref) => {
        dispatch(
          addFood({
            id: ref.key,
            ...calorie,
          })
        );
      });
  };
};

export const removeFood = ({ id } = {}) => ({
  type: "REMOVEFOOD",
  id,
});

export const editCalories = (id, updates) => ({
  type: "EDIT_CALORIES",
  id,
  updates,
});
