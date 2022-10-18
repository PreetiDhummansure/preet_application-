const express = require("express");

const { auth } = require("../middlewares/Auth");
const { login, register } = require("../controllers/AuthController");

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

module.exports = router;
