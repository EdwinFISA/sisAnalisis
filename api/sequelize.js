// sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.DB_NAME || 'database_name',  // Nombre de tu base de datos en PostgreSQL
  username: process.env.DB_USER || 'database_user',  // Usuario de PostgreSQL
  password: process.env.DB_PASSWORD || 'database_password',  // Contraseña de PostgreSQL
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,  // Puerto de PostgreSQL (por defecto es 5432)
});

module.exports = sequelize;
