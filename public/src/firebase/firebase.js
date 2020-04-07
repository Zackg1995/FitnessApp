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

database.ref().set({
  name: "Zack Grigor",
  age: 24,
  isSingle: true,
});

// database.ref().set("data");

database.ref("age").set(34);

database.ref("attributes").set({
  height: "5,9",
  weight: 90,
});
