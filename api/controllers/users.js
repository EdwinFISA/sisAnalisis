// controllers/bookController.js

const Book = require('../models/book');

// Crear un libro
exports.createBook = async (req, res) => {
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;
  try {
    const book = await Book.create({ nom, ape, nits, tel, dire, user, pass, role, state });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un libro
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }
    await book.update({ nom, ape, nits, tel, dire, user, pass, role, state });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }
    await book.destroy();
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
