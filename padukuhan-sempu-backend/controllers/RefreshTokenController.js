const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  try {
    const user = await User.findOne({
      where: {
        refreshToken: refreshToken,
      },
    });

    if (!user) {
      return res.sendStatus(403);
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decode) => {
        if (err || user.username !== decode.username) {
          return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
          { username: decode.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = handleRefreshToken;
