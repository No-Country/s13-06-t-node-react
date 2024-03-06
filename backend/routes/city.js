const { Router } = require('express');
const {
  getAll,
  getCityById,
  createCity,
  updateCity,
  deleteCity
} = require('../controllers/city');

const router = Router();

router.get('/', getAll);

router.get('/:id', getCityById);

router.post('/', createCity);

router.put('/:id', updateCity);

router.delete('/:id', deleteCity);

module.exports = router;
