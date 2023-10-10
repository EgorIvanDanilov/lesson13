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
