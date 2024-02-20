const express = require('express');

const { login, register } = require('../controllers/auth');

const router = express.Router();

/* POST login. */
router.post('/login', login);

/* POST register. */
router.post('/register', register);

module.exports = router;
