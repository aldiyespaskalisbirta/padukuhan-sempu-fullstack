const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;

(async () => {
  await db.sync();
})();
