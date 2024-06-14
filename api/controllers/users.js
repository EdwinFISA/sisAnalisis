// users.js

const DBusers = require('../models/DBusers');

exports.getAllBooks = (req, res) => {
  DBusers.findAll()
    .then(users => res.json(users))
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Error retrieving users');
    });
};

exports.getBookById = (req, res) => {
  const { id } = req.params;

  DBusers.findByPk(id)
    .then(user => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Error retrieving user');
    });
};

exports.createBook = (req, res) => {
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;

  DBusers.create({ nom, ape, nits, tel, dire, user, pass, role, state })
    .then(newUser => {
      res.status(201).json({ id: newUser.id });
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Error creating user');
    });
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { nom, ape, nits, tel, dire, user, pass, role, state } = req.body;

  DBusers.update({ nom, ape, nits, tel, dire, user, pass, role, state }, { where: { id } })
    .then(result => {
      if (result[0] === 0) {
        return res.status(404).send('User not found');
      }
      res.status(200).send('User updated successfully');
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Error updating user');
    });
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;

  DBusers.destroy({ where: { id } })
    .then(result => {
      if (result === 0) {
        return res.status(404).send('User not found');
      }
      res.status(200).send('User deleted successfully');
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Error deleting user');
    });
};
