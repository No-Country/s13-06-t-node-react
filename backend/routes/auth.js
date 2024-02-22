const express = require('express');

const { login, register } = require('../controllers/auth');

const router = express.Router();

/* POST login. */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Inicio de sesión de usuario registrado
 *     operationId: loginUser
 *     requestBody:
 *       description: Datos de inicio de sesión
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Login"
 *       required: true
 *     responses:
 *       "200":
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *              status: success
 *              code: 200
 *              message: Usuario autenticado con éxito!
 *              body:
 *                user:
 *                  id: 1
 *                  dni: "01212120384"
 *                  firstName: "Admin"
 *                  lastName: "Admin"
 *                  email: "admin@example.com"
 *                  miles: 0
 *                  role: "USER"
 *                token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjg5ZjEzNjIzNzU4NzQwMzI2YzQ3YiIsImlhdCI6MTYyNjE2NjUyMiwiZXhwIjoxNjI2MjUyOTIyfQ.4Tz6zJl0b1Z0j6h4v9Ww0kx3q9c5hZy3Dm3z9d7v9wA
 *           application/xml:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *       "401":
 *         description: Acceso no autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *              status: fail
 *              code: 401
 *              message: Usuario o contraseña incorrecta.
 *       "500":
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *              status: error
 *              code: 500
 *              message: No se pudo autenticar el usuario.
 */
router.post('/login', login);

/* POST register. */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Resgistro de nuevo usuario
 *     operationId: registerUser
 *     requestBody:
 *       description: Datos para registrar un nuevo usuario
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Register"
 *       required: true
 *     responses:
 *       "200":
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *              status: success
 *              code: 200
 *              message: Usuario creado con éxito!
 *              body:
 *                user:
 *                  id: 1
 *                  dni: "01245420384"
 *                  firstName: "Angel"
 *                  lastName: "Diaz"
 *                  email: "a.diaz@example.com"
 *                  miles: 0
 *                  role: "USER"
 *       "409":
 *         description: Conflicto en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *              status: fail
 *              code: 409
 *              message: El usuario ya existe.
 *       "500":
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ApiResponse"
 *             example:
 *              status: error
 *              code: 500
 *              message: No se pudo registrar el usuario.
 */
router.post('/register', register);

module.exports = router;
