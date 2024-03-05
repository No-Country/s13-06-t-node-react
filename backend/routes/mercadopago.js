const { Router } = require('express');
const { createPreference } = require('../controllers/mercadopago');

const router = Router();

router.post('/create-preference', createPreference);

module.exports = router;
