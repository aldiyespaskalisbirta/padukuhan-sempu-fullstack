const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = req.cookies.jwt;

  // is refresh token in DB?
  const user = await User.findOne({
    where: {
      refreshToken: refreshToken,
    },
  });
  if (!user) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }

  // delete refresh token
  user.refreshToken = "";
  const result = await user.save();
  console.log(result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
};

module.exports = handleLogout;
