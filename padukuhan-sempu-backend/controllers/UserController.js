const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER //
const register = async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (user) {
    return res.status(409).json({ message: "User already exists" });
  } else {
    const username = req.body.username;
    const email = req.body.email;
    const isAdmin = req.body.isAdmin;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    try {
      await User.create({
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: isAdmin,
      });
      res.status(201).json({ message: "User successfully created" });
    } catch (err) {
      console.log(err.message);
    }
  }
};

// LOGIN //
const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const checkPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!checkPassword) {
      return res.status(400).json({ message: "Wrong email or password" });
    }

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "secretKey");

    const { password, ...others } = user;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({ message: "User has been logged out" });
};

module.exports = {
  register,
  login,
  logout,
};
