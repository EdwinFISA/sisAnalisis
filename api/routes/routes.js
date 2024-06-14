const express = require("express");
const db = require("../controllers/users.js"); // Ajusta la ruta según la estructura de tu proyecto y el nombre del controlador

const router = express.Router();

const handleGetAllUsers = (req, res) => {
  db.getAllUsers((err, users) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving users");
    }

    res.json(users);
  });
};

const handleGetUserById = (req, res) => {
  const { id } = req.params;

  db.getUserById(id, (err, user) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving user");
    }

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  });
};

const handleUpdateUser = (req, res) => {
  const { id } = req.params;
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;

  if (!nom || !ape || !nits || !tel || !dire || !user || !pass || !role || !state) {
    return res.status(400).send("Los registros son requeridos");
  }

  db.updateUser(id, nom, ape, nits, tel, dire, user, pass, role, state, (err, changes) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error updating user");
    }

    if (changes === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User updated successfully");
  });
};

const handleDeleteUser = (req, res) => {
  const { id } = req.params;

  db.deleteUser(id, (err, changes) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error deleting user");
    }

    if (changes === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User deleted successfully");
  });
};

const handleCreateUser = (req, res) => {
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;
  if (!nom || !ape || !nits || !tel || !dire || !user || !pass || !role || !state) {
    return res.status(400).send("Los datos son requeridos");
  }

  db.createUser(nom, ape, nits, tel, dire, user, pass, role, state, (err, userId) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error creating user");
    }

    res.status(201).json({ id: userId });
  });
};

// Rutas API
router.post("/users", handleCreateUser);
router.get("/users", handleGetAllUsers);
router.get("/users/:id", handleGetUserById);
router.put("/users/:id", handleUpdateUser);
router.delete("/users/:id", handleDeleteUser);

module.exports = router;
