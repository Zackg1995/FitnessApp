const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //     resolve({
    //       name: "zack",
    //       age: 25,
    //     });
    reject("something went wrong");
  }, 5000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

//database example

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

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
