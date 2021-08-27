const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", loginController.login);
router.post("/token/validate", loginController.validateToken);

module.exports = router;
