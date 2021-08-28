const fs = require("fs");
const users = require("../storage/users.json");

const findByEmailAndPassword = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) throw new Error("User not found");
  return user;
};

const findByEmail = (email) => {
  const user = users.find((user) => user.email === email);
  return user;
};

const addUser = (id, email, password) => {
  users.push({ id, email, password });
  const stringUsers = JSON.stringify(users);
  fs.writeFileSync(__dirname + "/../storage/users.json", stringUsers);
};

module.exports = { findByEmailAndPassword, findByEmail, addUser };
