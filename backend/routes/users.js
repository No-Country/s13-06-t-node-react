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
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener todos los usuarios
 *     operationId: getAllUsers
 *     responses:
 *       "200":
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *               status: success
 *               code: 200
 *               message: Usuarios obtenidos con éxito!
 *               body:
 *                 users:
 *                   - { id: 1, dni: "01212120384", firstName: "Adrian", lastName: "Hueto", email: "a.hueto@example.com", miles: 0, role: "USER"}
 *                   - { id: 2, dni: "01212120384", firstName: "Lucas", lastName: "Lorenzo", email: "l.lorenzo@example.com", miles: 0, role: "USER"}
 *       "500":
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *               status: error
 *               code: 500
 *               message: Error al obtener los usuarios!
 */
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
