const express = require('express');

const {
  getAll,
  getByEmail,
  getById,
  create,
  update,
  remove
} = require('../controllers/user');

const router = express.Router();

// const auth = passport.authenticate('jwt', { session: false });

/* GET users listing. */
router.get('/', getAll);

/* GET user by email. */
router.get('/email/:email', getByEmail);

/* GET user by id. */
router.get('/id/:id', getById);

/* POST new user. */
router.post('/', create);

/* PUT user by id. */
router.put('/:id', update);

/* DELETE user by id. */
router.delete('/:id', remove);

module.exports = router;
