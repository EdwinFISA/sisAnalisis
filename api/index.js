const express = require("express");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const routes = require("./routes/routes");
const {FRONTEND_URL, PORT} = require("./config.cjs");

//const cors = require("express-cors");
const cors = require("cors");

const app = express();
//const port = PORT;

// Configure session with SQLite store
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


// Configurar CORS adecuadamente
const corsOptions = {
  origin: FRONTEND_URL,  // Usar FRONTEND_URL definido en config.cjs
  credentials: true,     // Permitir credenciales (cookies, tokens)
  methods: ["GET", "POST", "PUT", "DELETE"],  // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"],  // Encabezados permitidos
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});