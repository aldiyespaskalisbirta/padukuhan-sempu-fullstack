const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  if (!username)
    return res.status(400).json({ message: "Username are required" });
  if (!password)
    return res.status(400).json({ message: "Password are required" });
  if (!user) return res.status(401).json({ message: "User Not Found" });
  const checkPassword = await bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    return res.status(401).json({ message: "Wrong password!" });
  } else {
    const accessToken = jwt.sign(
      { uuid: user.uuid },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res
      .cookie("jwt", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        accessToken,
      });
  }
};

module.exports = handleLogin;
