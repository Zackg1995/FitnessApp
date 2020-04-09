import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:887780190120:web:0c68171d119558b0199f9d",
  measurementId: "G-7G76BVLRWC",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// //Child remove
// database.ref("calories").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child Changed

// database.ref("calories").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child added
// database.ref("calories").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // database
// //   .ref("calories")
// //   .once("value")
// //   .then((snapshot) => {
// //     const calories = [];

// //     snapshot.forEach((childSnapshot) => {
// //       calories.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(calories);
// //   });

// // database.ref("calories").on("value", (snapshot) => {
// //   const calories = [];

// //   snapshot.forEach((childSnapshot) => {
// //     calories.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });
// //   console.log(calories);
// // });

// // database.ref("calories").push({
// //   Description: "Chicken",
// //   Calories: 100,
// //   note: "lunch Time",
// //   createdAt: "08/04/2020",
// // });
