const { Router } = require('express');
const {
  validatePartialSchema,
  validateSchema
} = require('../middlewares/validateSchema');
const { routeSchema } = require('../schemas/routeSchema');

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

router.post('/', validateSchema(routeSchema), create);

router.put('/:id', validatePartialSchema(routeSchema), update);

router.delete('/:id', remove);

module.exports = router;
