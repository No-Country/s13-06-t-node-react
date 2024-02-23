const { Router } = require('express');
const {
  getAll,
  getTerminalById,
  createTerminal,
  updateTerminal,
  deleteTerminal
} = require('../controllers/terminal');

const router = Router();

router.get('/', getAll);

router.get('/id/:id', getTerminalById);

router.post('/', createTerminal);

router.put('/:id', updateTerminal);

router.delete('/:id', deleteTerminal);

module.exports = router;
