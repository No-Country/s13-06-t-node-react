const express = require('express');

const {
  getAll,
  getAllByUserClientId,
  getById,
  create,
  update,
  remove
} = require('../controllers/passenger');

const router = express.Router();

/* GET passengers listing. */
router.get('/', getAll);

/* GET passenger by userClientId. */
router.get('/userClientId/:userClientId', getAllByUserClientId);

/* GET passenger by id. */
router.get('/id/:id', getById);

/* POST new passenger. */
router.post('/', create);

/* PUT update passenger by id. */
router.put('/id/:id', update);

/* DELETE passenger by id. */
router.delete('/id/:id', remove);

module.exports = router;
