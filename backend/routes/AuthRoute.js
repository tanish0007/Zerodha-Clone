const express = require("express");
const { Signup, Login } = require("../controllers/AuthController");

const router = express.Router();
router.post("/auth/signup", Signup);
router.post("/auth/login", Login);

module.exports = router;