const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config;

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  //   check condition
  if (!email) return res.status(400).json({ message: "Email are required" });
  if (!password)
    return res.status(400).json({ message: "Password are required" });
  if (!user) return res.status(401).json({ message: "User Not Foud" });
  // check password
  const checkPassword = await bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    return res.status(401).json({ message: "Wrong password!" });
  } else {
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res
      .cookie("jwt", accessToken, {
        httpOnly: true,
        // sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        accessToken: accessToken,
      });
  }
};

module.exports = handleLogin;
