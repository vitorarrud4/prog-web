const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");
const secret = require("../config/secret");

const loginController = require("../controllers/login.controller");
const userController = require("../controllers/user.controller");
const contentController = require("../controllers/content.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/login", (req, res, next) => {
  res.render("login");
});
router.get("/home", (req, res, next) => {
  res.render("home");
});
router.get("/usuario/novo", (req, res, next) => {
  res.render("new-user");
});
router.get("/conteudos", (req, res, next) => {
  res.render("search-content");
});

router.post("/login", loginController.login);
router.post("/token/validate", loginController.validateToken);
router.post(
  "/users",
  jwt({ secret, algorithms: ["HS256"] }),
  userController.addNewUser
);
router.post(
  "/contents/find",
  jwt({ secret, algorithms: ["HS256"] }),
  contentController.findContent
);

module.exports = router;
