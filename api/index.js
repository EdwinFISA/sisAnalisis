// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { FRONTEND_URL, PORT } = require('./config.cjs');
const sequelize = require('./sequelize');
const userController = require('./controllers/users');

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
app.use('/api', require('./routes'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Sincronización de Sequelize con la base de datos
sequelize.sync({ force: false })  // Cambiar a true si se desea sincronizar la base de datos
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
