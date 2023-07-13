const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const Images = db.define(
  "Images",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Images;

(async () => {
  await db.sync();
})();
