import database from "../firebase/firebase";
import { v4 as uuid } from "uuid";

export const addExercise = (exercise) => ({
  type: "ADDEXERCISE",
  exercise,
});

export const startAddExercise = (exerciseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      exercises = "",
      exerciseNotes = "",
      caloriesBurnt = 0,
      createdAt = 0,
    } = exerciseData;
    const exercise = {
      exercises,
      exerciseNotes,
      caloriesBurnt,
      createdAt,
    };
    return database
      .ref(`users/${uid}/exercises`)
      .push(exercise)
      .then((ref) => {
        dispatch(
          addExercise({
            id: ref.key,
            ...exercise,
          })
        );
      });
  };
};

export const removeExercise = ({ id } = {}) => ({
  type: "REMOVEEXERCISE",
  id,
});

export const startRemoveExercise = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/exercises/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExercise({ id }));
      });
  };
};

export const editExercise = (id, updates) => ({
  type: "EDITEXERCISE",
  id,
  updates,
});

export const startEditExercise = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/exercises/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExercise(id, updates));
      });
  };
};

export const setExercise = (exercises) => ({
  type: "SETEXERCISE",
  exercises,
});

export const startSetExercise = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/exercises`)
      .once("value")
      .then((snapshot) => {
        const exercises = [];

        snapshot.forEach((childSnapshot) => {
          exercises.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExercise(exercises));
      });
  };
};
