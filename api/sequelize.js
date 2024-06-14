// sequelize.js

const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = require('./config.cjs');

// Configuración de la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres', // Se ajusta al dialecto correspondiente
});

module.exports = sequelize;
