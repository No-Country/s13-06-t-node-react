const { Router } = require('express');
const {
  getAll,
  getById,
  getByEmailAndDate,
  getByUser,
  create,
  update,
  remove
} = require('../controllers/reservation');

const router = Router();

// Obtener todas las reservas
router.get('/', getAll);

// Obtener una reserva por su id
router.get('/:id', getById);

// Obtener una reserva por su email y fecha de reserva
router.get('/email-date', getByEmailAndDate);

// Obtener todas las reservas de un usuario
router.get('/user/:userClientId', getByUser);

// Crear una reserva
router.post('/', create);

// Actualizar una reserva
router.put('/:id', update);

// Eliminar una reserva
router.delete('/:id', remove);

module.exports = router;
