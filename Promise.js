let p = new Promise((resolve, reject) => {
    resolve("Work done!");
    });

    p.then(result => console.log(result))
    .catch(error => console.log(error));