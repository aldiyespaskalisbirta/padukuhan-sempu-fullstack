const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const Images = db.define(
  "Images",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { noEmpty: true, len: [3, 100] },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { noEmpty: true, isEmail: true },
    },
    image: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Images;

// (async () => {
//   await db.sync();
// })();
