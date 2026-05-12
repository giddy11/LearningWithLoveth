// spread with objects

const user = {
  name: "Gideon",
  age: 25,
  course: "Computer",
  state: "Rivers"
};

const updatedUser = {
  ...user,
  level: "Level one"
}

console.log(updatedUser);