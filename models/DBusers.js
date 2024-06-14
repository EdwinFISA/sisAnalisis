// En src/api/models/DBusers.js

const { Sequelize, DataTypes } = require("sequelize");

// Configura la conexión a PostgreSQL
const sequelize = new Sequelize("DBBonanza", "db_461c_user", "db_461c_user", {
  host: "dpg-cpm2ve5ds78s738sst80-a",
  dialect: "postgres",
});

// Define el modelo DBusers
const DBusers = sequelize.define("DBusers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ape: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nits: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dire: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = DBusers;
