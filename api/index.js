// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { FRONTEND_URL, PORT } = require('./config.cjs');
const sequelize = require('./sequelize');  // Importa la instancia de Sequelize
const bookController = require('./controllers/bookController');  // Ajusta la ruta según la estructura de tu proyecto

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de CORS
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Rutas de la API
app.get('/api/books', bookController.getAllBooks);
app.get('/api/books/:id', bookController.getBookById);
app.post('/api/books', bookController.createBook);
app.put('/api/books/:id', bookController.updateBook);
app.delete('/api/books/:id', bookController.deleteBook);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Sincronización de Sequelize con la base de datos
sequelize.sync({ force: false })  // Cambia a true si quieres que Sequelize sincronice la base de datos (crear o modificar tablas)
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
