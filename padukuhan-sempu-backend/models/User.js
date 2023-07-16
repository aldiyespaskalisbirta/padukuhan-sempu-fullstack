const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const User = db.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { noEmpty: true, len: [3, 100] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { noEmpty: true, isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { noEmpty: true },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { noEmpty: true },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;

// (async () => {
//   await db.sync();
// })();
