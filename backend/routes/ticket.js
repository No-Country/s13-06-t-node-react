const express = require('express');

const {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  remove
} = require('../controllers/ticket');

const router = express.Router();

/* GET tickets listing. */
router.get('/', getAll);

/* GET ticket by id. */
router.get('/id/:id', getById);

/* GET ticket by email. */
router.get('/email/:email', getByEmail);

/* POST new ticket. */
router.post('/', create);

/* PUT ticket by id. */
router.put('/:id', update);

/* DELETE ticket by id. */
router.delete('/:id', remove);

module.exports = router;
