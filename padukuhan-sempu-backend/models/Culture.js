const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const Culture = db.define(
  "Culture",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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

module.exports = Culture;

// (async () => {
//   await db.sync();
// })();
