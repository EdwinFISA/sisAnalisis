// db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("books.db");

exports.modules = {
  sqlite3,
  db,
};
