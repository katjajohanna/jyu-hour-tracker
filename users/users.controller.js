const express = require('express');
const router = express.Router();
const userService = require('./user.service');

router.post('/authenticate', authenticate);
//router.get('/', getAll); Comment this line to not reveal users for the world
router.post('/register', register)

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.register(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Could not register' }))
        .catch(err => next(err));
}