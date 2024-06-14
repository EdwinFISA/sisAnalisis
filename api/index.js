import {FRONTEND_URL, PORT} from './config.js';
const express = require("express");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const routes = require("./routes/routes");

//const cors = require("express-cors");
const cors = require("cors");

const app = express();
const port = 4200;

// Configure session with SQLite store
//app.use(
//  session({
//    secret: "secret",
//    resave: true,
//    saveUninitialized: true,
//    store: new SQLiteStore({
//      db: "sessions.db",
//      concurrentDB: true,
//    }),
//  })
//);
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});