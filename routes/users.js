const express = require('express');
const router = express.Router();

const usersController = require('../controller/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

router.post('/', usersController.createrUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;