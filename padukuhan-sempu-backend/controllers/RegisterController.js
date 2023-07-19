const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleRegister = async (req, res) => {
  const user = await User.findOne({
    where: {
      // console.log(err.message);
      username: req.body.username,
    },
  });
  if (user) {
    return res.status(409).json({ message: "User already exists" });
  } else {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    try {
      await User.create({
        username: username,
        email: email,
        role: role,
        password: hashedPassword,
      });
      res.status(201).json({ message: "User successfully created" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = handleRegister;
