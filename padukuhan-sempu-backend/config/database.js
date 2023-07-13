const Sequelize = require("sequelize");

const db = new Sequelize("padukuhan_sempu", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
