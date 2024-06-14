const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = process.env.DB_PATH || path.resolve(__dirname, "books.db");
const db = new sqlite3.Database(dbPath);

db.run(`CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT,
  ape TEXT,
  nits TEXT,
  tel TEXT,
  dire TEXT,
  user TEXT,
  pass TEXT,
  role TEXT,
  state TEXT
)`);

const promisify = (db, method) => {
  return (...params) => {
    return new Promise((resolve, reject) => {
      db[method](...params, function(err, result) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
};

exports.createBook = promisify(db, "run").bind(db, "INSERT INTO books (nom, ape, nits, tel, dire, user, pass, role, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
exports.getAllBooks = promisify(db, "all").bind(db, "SELECT * FROM books");
exports.getBookById = promisify(db, "get").bind(db, "SELECT * FROM books WHERE id = ?");
exports.updateBook = promisify(db, "run").bind(db, "UPDATE books SET nom = ?, ape = ?, nits = ?, tel = ?, dire = ?, user = ?, pass = ?, role = ?, state = ? WHERE id = ?");
exports.deleteBook = promisify(db, "run").bind(db, "DELETE FROM books WHERE id = ?");
