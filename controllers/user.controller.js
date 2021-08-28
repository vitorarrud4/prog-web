const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/user.model");

const addNewUser = (req, res) => {
  const { email, password } = req.body;
  try {
    const foundEmail = userModel.findByEmail(email);
    if (foundEmail) throw new Error("User already exists");
    const id = uuidv4();
    userModel.addUser(id, email, password);
    res.status(200).send("User added!");
  } catch (error) {
    console.log("!!!", error);
    let statusCode = 500;
    if (error.message === "User already exists") statusCode = 400;
    res.status(statusCode).send(error.message);
  }
};

module.exports = { addNewUser };
