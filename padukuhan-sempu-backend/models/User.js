const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const User = db.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3, 100] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // role: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: "user",
    // },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;

// (async () => {
//   await db.sync();
// })();
