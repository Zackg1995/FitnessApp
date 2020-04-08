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
