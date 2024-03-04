const express = require('express');

const {
  getAmenities,
  getAmenityById,
  createAmenity,
  updateAmenity,
  deleteAmenity
} = require('../controllers/amenity');

const router = express.Router();

/* GET amenities. */
router.get('/', getAmenities);

/* GET amenity by id. */
router.get('/id/:id', getAmenityById);

/* POST amenity. */
router.post('/', createAmenity);

/* PUT amenity by id */
router.put('/:id', updateAmenity);

/* DELETE amenity by id */
router.delete('/:id', deleteAmenity);

module.exports = router;
