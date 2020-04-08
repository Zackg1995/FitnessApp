import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3AB1EMEJcfr0jm8pnpEGy8SyscqaLzcs",
  authDomain: "fitbud-ee973.firebaseapp.com",
  databaseURL: "https://fitbud-ee973.firebaseio.com",
  projectId: "fitbud-ee973",
  storageBucket: "fitbud-ee973.appspot.com",
  messagingSenderId: "887780190120",
  appId: "1:887780190120:web:0c68171d119558b0199f9d",
  measurementId: "G-7G76BVLRWC",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

//Child remove
database.ref("calories").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child Changed

database.ref("calories").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child added
database.ref("calories").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
// database
//   .ref("calories")
//   .once("value")
//   .then((snapshot) => {
//     const calories = [];

//     snapshot.forEach((childSnapshot) => {
//       calories.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(calories);
//   });

// database.ref("calories").on("value", (snapshot) => {
//   const calories = [];

//   snapshot.forEach((childSnapshot) => {
//     calories.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(calories);
// });

// database.ref("calories").push({
//   Description: "Chicken",
//   Calories: 100,
//   note: "lunch Time",
//   createdAt: "08/04/2020",
// });
