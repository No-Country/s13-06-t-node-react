const express = require('express');

const { getVehicles } = require('../controllers/vehicle');

const router = express.Router();

// GET all vehicles
router.get('/', getVehicles);

module.exports = router;
