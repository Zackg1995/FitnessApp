import moment from "moment";

export default [
  {
    id: "1",
    description: "chicken",
    note: "",
    calories: 100,
    createdAt: 0
  },
  {
    id: "2",
    description: "beef",
    note: "",
    calories: 250,
    createdAt: moment(0)
      .subtract(50, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "lamb",
    note: "",
    calories: 300,
    createdAt: moment(0)
      .add(30, "days")
      .valueOf()
  }
];
