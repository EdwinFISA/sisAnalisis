// models/book.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');  // Asegúrate de que esta ruta sea correcta

const Book = sequelize.define('Book', {
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
}, {
  tableName: 'books',  // Nombre de la tabla en la base de datos
  timestamps: false,   // Si no necesitas los timestamps created_at y updated_at
});

module.exports = Book;
