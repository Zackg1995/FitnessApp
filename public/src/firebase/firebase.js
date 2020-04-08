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

database.ref().on("value", (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// database
//   .ref("name")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("there was an error");
//   });

// database
//   .ref()
//   .set({
//     name: "Zack Grigor",
//     age: 24,
//     stressLevel: 6,
//     job: {
//       title: "Developer",
//       company: "UoB",
//     },
//     location: {
//       country: "UK",
//       city: "Guernsey",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("This is an error", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Brighton",
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("been removed");
//   })
//   .catch((e) => {
//     console.log("there has been an error", e);
//   });
