// routes.js
const express = require("express");
const db = require("../controllers/books");

const router = express.Router();

const handleGetAllBooks = (req, res) => {
  db.getAllBooks((err, books) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving books");
    }

    res.json(books);
  });
};

const handleGetBookById = (req, res) => {
  const { id } = req.params;

  db.getBookById(id, (err, book) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving book");
    }

    if (!book) {
      return res.status(404).send("Book not found");
    }

    res.json(book);
  });
};

const handleUpdateBook = (req, res) => {
  const { id } = req.params;
  const { nom, ape, nits,  tel, dire, user, pass, role, state } = req.body;

  if (!nom || !ape || !nits || !tel || !dire || !user || !pass || !role || !state) {
    return res.status(400).send("Los registros son requeridos");
  }

  db.updateBook(id, nom, ape, nits,  tel, dire, user, pass, role, state, (err, changes) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error updating usuario");
    }

    if (changes === 0) {
      return res.status(404).send("Usuarios not found");
    }

    res.status(200).send("Usuario updated successfully");
  });
};

const handleDeleteBook = (req, res) => {
  const { id } = req.params;

  db.deleteBook(id, (err, changes) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error deleting book");
    }

    if (changes === 0) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send("Book deleted successfully");
  });
};

const handleCreateBook = (req, res) => {
  const {nom, ape, nits, tel, dire, user, pass, role, state} = req.body;
  if (!nom || !ape || !nits || !tel || !dire || !user || !pass || !role || !state) {
    return res.status(400).send("Los datos son requeridos");
  }

  db.createBook(nom, ape, nits, tel, dire, user, pass, role, state, (err, bookId) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error creating user");
    }

    res.status(201).json({ id: bookId });
  });
};

// Rutas API
router.post("/books", handleCreateBook);
router.get("/books", handleGetAllBooks);
router.get("/books/:id", handleGetBookById);
router.put("/books/:id", handleUpdateBook);
router.delete("/books/:id", handleDeleteBook);

module.exports = router;

/*router.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).send("Title and author are required");
  }

  db.createBook(title, author, (err, bookId) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error creating book");
    }

    res.status(201).json({ id: bookId });
  });
});

router.get("/books", (req, res) => {
  db.getAllBooks((err, books) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving books");
    }

    res.json(books);
  });
});

router.get("/books/:id", (req, res) => {
  const { id } = req.params;

  db.getBookById(id, (err, book) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving book");
    }

    if (!book) {
      return res.status(404).send("Book not found");
    }

    res.json(book);
  });
});

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).send("Title and author are required");
  }

  db.updateBook(id, title, author, (err, changes) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error updating book");
    }

    if (changes === 0) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send("Book updated successfully");
  });
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  db.deleteBook(id, (err, changes) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error deleting book");
    }

    if (changes === 0) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send("Book deleted successfully");
  });
});*/
