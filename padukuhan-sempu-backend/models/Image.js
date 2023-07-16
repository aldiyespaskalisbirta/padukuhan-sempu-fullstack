const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const Images = db.define(
  "Images",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Images;

// (async () => {
//   await db.sync();
// })();
