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

firebase.database().ref().set({
  name: "Zack Grigor",
});
