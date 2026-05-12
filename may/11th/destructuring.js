const user = {
  name: "Gideon",
  age: 25,
  course: "Computer",
  state: "Rivers"
};

// const name = user.name;
// const age = user.age;
// const course = user.course;
// const state = user.state;

//with destructuring
const {name, age, course, state} = user;

console.log(name)