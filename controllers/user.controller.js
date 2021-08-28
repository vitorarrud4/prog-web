const loginModel = require("../models/login.model");

const addNewUser = (req, res) => {
  const { email, password } = req.body;
  try {
    const foundEmail = loginModel.findByEmail(email);
    if (foundEmail) throw new Error("User already exists");
    loginModel.addUser(email, password);
    res.status(200).send("User added!");
  } catch (error) {
    console.log("!!!", error);
    let statusCode = 500;
    if (error.message === "User already exists") statusCode = 400;
    res.status(statusCode).send(error.message);
  }
};

module.exports = { addNewUser };
