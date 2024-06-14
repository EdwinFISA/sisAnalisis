const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Configuración del middleware de proxy para manejar CORS
app.use(
  "/api",  // Ruta base de la API
  createProxyMiddleware({
    target: "http://localhost:4200",  // Cambia esto al URL de tu backend
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",  // Ruta base de tu API
    },
  })
);

// Rutas y middleware adicionales de tu aplicación
// ...

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
