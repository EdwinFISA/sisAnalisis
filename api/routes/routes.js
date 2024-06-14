// routes.js

const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/books', userController.getAllBooks);
router.get('/books/:id', userController.getBookById);
router.post('/books', userController.createBook);
router.put('/books/:id', userController.updateBook);
router.delete('/books/:id', userController.deleteBook);

module.exports = router;
