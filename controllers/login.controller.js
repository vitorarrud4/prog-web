const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const userModel = require("../models/user.model");

const login = (req, res) => {
  const { email, password } = req.body;
  try {
    const user = userModel.findByEmailAndPassword(email, password);
    const token = jwt.sign({ id: user.id }, secret);
    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(400).send("User/password invalid");
  }
};

const validateToken = (req, res) => {
  try {
    const [_, token] = req.headers.authorization.split("Bearer ");
    const decoded = jwt.verify(token, secret);
    res.status(200).send("Valid token");
  } catch (_) {
    res.status(400).send("Invalid token");
  }
};

module.exports = { login, validateToken };
