const users = require("../storage/users.json");

const findByEmailAndPassword = (email, password) => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) throw new Error("User not found");
  return user;
};

module.exports = { findByEmailAndPassword };
