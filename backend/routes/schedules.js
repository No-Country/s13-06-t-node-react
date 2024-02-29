const { Router } = require('express');
const {
  validatePartialSchema,
  validateSchema
} = require('../middlewares/validateSchema');
const { scheduleSchema } = require('../schemas/scheduleSchema');

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

router.post('/', validateSchema(scheduleSchema), create);

router.put('/:id', validatePartialSchema(scheduleSchema), update);

router.delete('/:id', remove);

module.exports = router;
