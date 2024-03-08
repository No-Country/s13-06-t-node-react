const express = require('express');
const {
  validatePartialSchema,
  validateSchema
} = require('../middlewares/validateSchema');
const { vehicleSchema } = require('../schemas/vehicleSchema');

const {
  //   getVehicles,
  getVehiclesAmenities,
  //   getVehicleById,
  getVehicleAmenityById,
  //   getVehicleByPlate,
  getVehicleAmenityByPlate,
  //   createVehicle,
  createVehicleAmenity,
  //   updateVehicle,
  updateVehicleAmenity,
  //   deleteVehicle,
  deleteVehicleAmenity
} = require('../controllers/vehicle');

const router = express.Router();

// GET all vehicles whit amenities
router.get('/', getVehiclesAmenities);

// GET vehicle and amenites by id
router.get('/id/:id', getVehicleAmenityById);

// GET vehicle and amenites by plate
router.get('/plate/:plate', getVehicleAmenityByPlate);

// POST new vehicle and amenites
router.post('/', validateSchema(vehicleSchema), createVehicleAmenity);

// PUT vehicle and amenites
router.put('/:id', validatePartialSchema(vehicleSchema), updateVehicleAmenity);

// DELETE vehicle and association
router.delete('/:id', deleteVehicleAmenity);

module.exports = router;
