import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";

export const addFood = (calorie) => ({
  type: "ADDFOOD",
  calorie,
});

export const startAddCalories = (caloriesData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
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
      .ref(`users/${uid}/calories`)
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

export const startRemoveCalories = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/calories/${id}`)
      .remove()
      .then(() => {
        dispatch(removeFood({ id }));
      });
  };
};

export const editCalories = (id, updates) => ({
  type: "EDIT_CALORIES",
  id,
  updates,
});

export const startEditCalories = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/calories/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editCalories(id, updates));
      });
  };
};

export const setCalories = (calories) => ({
  type: "SET_CALORIES",
  calories,
});

export const startSetCalories = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/calories`)
      .once("value")
      .then((snapshot) => {
        const calories = [];

        snapshot.forEach((childSnapshot) => {
          calories.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setCalories(calories));
      });
  };
};
