// controllers/users.js

const DBuser = require('..api/models/DBusers');  // Ajusta la ruta según la estructura de tu proyecto y el nombre del modelo

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;

  User.create({ nom, ape, nits, tel, dire, user, pass, role, state })
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.error('Error al crear usuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
};

// Obtener un usuario por su ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
      } else {
        res.json(user);
      }
    })
    .catch(err => {
      console.error('Error al obtener usuario por ID:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
};

// Actualizar un usuario por su ID
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;

  User.findByPk(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
      } else {
        return user.update({ nom, ape, nits, tel, dire, user, pass, role, state })
          .then(updatedUser => {
            res.json(updatedUser);
          });
      }
    })
    .catch(err => {
      console.error('Error al actualizar usuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
};

// Eliminar un usuario por su ID
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
      } else {
        return user.destroy()
          .then(() => {
            res.status(204).end();
          });
      }
    })
    .catch(err => {
      console.error('Error al eliminar usuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
};
