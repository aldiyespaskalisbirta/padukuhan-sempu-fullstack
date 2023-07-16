const express = require("express");
const handleLogout = require("../controllers/LogoutController");
const handleRefreshToken = require("../controllers/RefreshTokenController");
const handleLogin = require("../controllers/AuthController");
const handleRegister = require("../controllers/RegisterController");
const router = express.Router();

router.post("/auth", handleLogin);
router.post("/logout", handleLogout);
router.post("/register", handleRegister);
router.get("/refresh", handleRefreshToken);

module.exports = router;
