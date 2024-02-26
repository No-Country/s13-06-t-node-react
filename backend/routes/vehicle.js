const express = require('express');

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
/**
 * @swagger
 * /vehicles:
 *   get:
 *     tags:
 *       - Vehicles
 *     summary: Obtener todos los vehiculos (buses) y sus amenities (servicios)
 *     operationId: getVehiclesAmenities
 *     responses:
 *       "200":
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *               status: success
 *               code: 200
 *               message: Vehiculos obtenidos con éxito!
 *               body:
 *                 vehicles:
 *                   - {id: 1, number: 1, plate: "QRST90", totalSeats: 60, amenities: ["Cargador USB", "WiFi", "Aire Acondicionado"] }
 *                   - {id: 2, number: 2, plate: "ABCD12", totalSeats: 40, amenities: ["WiFi", "TV"] }
 *       "500":
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *               status: error
 *               code: 500
 *               message: Error al obtener los vehiculos!
 */
router.get('/', getVehiclesAmenities);

// GET vehicle and amenites by id
router.get('/id/:id', getVehicleAmenityById);

// GET vehicle and amenites by plate
router.get('/plate/:plate', getVehicleAmenityByPlate);

// POST new vehicle and amenites
router.post('/', createVehicleAmenity);

// PUT vehicle and amenites
router.put('/:id', updateVehicleAmenity);

// DELETE vehicle and association
router.delete('/:id', deleteVehicleAmenity);

module.exports = router;
