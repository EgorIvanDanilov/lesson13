function getStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = { name: "Anri", age: 32 };
      resolve(student);
    }, 4000);
  });
}

const studentPromise = getStudent();

studentPromise.then((student) => {
  console.log(student.name);
});

//2

function getDriverLicense(success, failure) {
  if (Math.random() > 0.1) {
    success("Success!");
  } else {
    failure("Failure!=(");
  }
}

function success(res) {
  console.log(`Success! With: ${res}`);
}

function failure(msg) {
  console.log(`Failure! with: ${msg}`);
}
getDriverLicense(success, failure);
