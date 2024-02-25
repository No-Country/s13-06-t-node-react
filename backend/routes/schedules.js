const { Router } = require('express');
const {
  getAll,
  getById,
  getAvailableSchedules,
  create,
  update,
  remove
} = require('../controllers/schedule');

const router = Router();

router.get('/all', getAll);

router.get('/id/:id', getById);

router.get('/', getAvailableSchedules);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;
