const express = require("express");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const routes = require("./routes/routes");
const { FRONTEND_URL, PORT } = require("./config.cjs");
const cors = require("cors");

const app = express();

// Configurar sesión con SQLite store
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: new SQLiteStore({
      db: "sessions.db",
      concurrentDB: true,
    }),
  })
);

// Configurar CORS
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas
app.use("/", routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
