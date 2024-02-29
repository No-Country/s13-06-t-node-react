const express = require('express');

const { login, register } = require('../controllers/auth');
const { validateSchema } = require('../middlewares/validateSchema');
const { loginSchema, registerSchema } = require('../schemas/authSchema');

const router = express.Router();

/* POST login. */
router.post('/login', validateSchema(loginSchema), login);

/* POST register. */
router.post('/register', validateSchema(registerSchema), register);

module.exports = router;
