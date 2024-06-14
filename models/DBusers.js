// DBusers.js

const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const DBusers = sequelize.define('DBusers', {
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
    unique: true,
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
}, {
  tableName: 'DBusers',
  timestamps: false,
});

module.exports = DBusers;
