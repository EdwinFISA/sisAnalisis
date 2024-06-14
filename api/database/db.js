require('dotenv').config(); // Cargar variables de entorno desde .env
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = process.env.DB_PATH || path.join(__dirname, "books.db"); // Usar la variable de entorno o una ruta por defecto

const db = new sqlite3.Database(dbPath);

module.exports = {
  sqlite3,
  db,
};
