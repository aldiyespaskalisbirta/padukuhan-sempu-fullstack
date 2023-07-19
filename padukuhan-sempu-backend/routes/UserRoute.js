const express = require("express");
const handleLogout = require("../controllers/LogoutController");
const handleLogin = require("../controllers/LoginController");
const handleRegister = require("../controllers/RegisterController");
const router = express.Router();

router.post("/login", handleLogin);
router.post("/logout", handleLogout);
router.post("/register", handleRegister);

module.exports = router;
