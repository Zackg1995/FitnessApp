import { v4 as uuid } from "uuid";

export const addFood = ({
  description = "",
  note = "",
  calories = 0,
  createdAt = 0
} = {}) => ({
  type: "ADDFOOD",
  calorie: {
    id: uuid(),
    description,
    note,
    calories,
    createdAt
  }
});

export const removeFood = ({ id } = {}) => ({
  type: "REMOVEFOOD",
  id
});

export const editCalories = (id, updates) => ({
  type: "EDIT_CALORIES",
  id,
  updates
});
