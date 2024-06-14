// db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("books.db");

// Create books table if not exists
db.run(
  "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, ape TEXT, nits TEXT, tel TEXT, dire TEXT, user TEXT, pass TEXT, role TEXT, state TEXT)"
);

// CRUD operations
exports.createBook = (nom, ape, nits, tel, dire, user, pass, role, state, callback) => {
  db.run(
    "INSERT INTO books (nom, ape, nits, tel, dire, user, pass, role, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [nom, ape, nits, tel, dire, user, pass, role, state],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

exports.getAllBooks = (callback) => {
  db.all("SELECT * FROM books", callback);
};

exports.getBookById = (id, callback) => {
  db.get("SELECT * FROM books WHERE id = ?", [id], callback);
};

exports.updateBook = (id, nom, ape, nits, tel, dire, user, pass, role, state, callback) => {
  db.run(
    "UPDATE books SET nom = ?, ape = ?, nits = ?, tel = ?, dire = ?, user = ?, pass = ?, role = ?, state = ? WHERE id = ?",
    [nom, ape, nits, tel, dire, user, pass, role, state, id],
    function (err) {
      callback(err, this.changes);
    }
  );
};

exports.deleteBook = (id, callback) => {
  db.run("DELETE FROM books WHERE id = ?", [id], function (err) {
    callback(err, this.changes);
  });
};
