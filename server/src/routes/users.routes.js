const express = require('express');
const controller = require('../controllers/user.controller');

const usersRoutes = express.Router();
usersRoutes.get('/', controller.getAllUsers);
usersRoutes.get('/:id', controller.getUserById);
usersRoutes.post('/', controller.createUser);
usersRoutes.patch('/:id', controller.updateUser);
usersRoutes.delete('/:id', controller.deleteUser);

module.exports = usersRoutes;
