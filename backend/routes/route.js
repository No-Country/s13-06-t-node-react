const { Router } = require('express');
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('../controllers/route');

const router = Router();

router.get('/', getAll);

router.get('/id/:id', getById);

router.post('/', create);

router.put('/:id', update);

router.delete('/:id', remove);

module.exports = router;
