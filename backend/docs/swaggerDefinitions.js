/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Autenticación de usuarios
 *   - name: Users
 *     description: Gestión de usuarios
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: usuario@mail.com
 *         password:
 *           type: string
 *           format: password
 *           example: C0ntr4s3ñ4s3gur4
 *       required:
 *         - email
 *         - password
 *     LoginResponse:
 *       type: object
 *
 *     Register:
 *       type: object
 *       properties:
 *         dni:
 *           type: string
 *           example: "01212120384"
 *         firstName:
 *           type: string
 *           example: Dani
 *         lastName:
 *           type: string
 *           example: Garcia
 *         email:
 *           type: string
 *           example: d.garcia@gxmail.com
 *         password:
 *           type: string
 *           format: password
 *           example: C0ntr4s3ñ4s3gur4
 *       required:
 *         - dni
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 14
 *         dni:
 *           type: string
 *           example: "01245420384"
 *         firstName:
 *           type: string
 *           example: "Angel"
 *         lastName:
 *           type: string
 *           example: "Diaz"
 *         email:
 *           type: string
 *           example: "a.diaz@example.com"
 *         miles:
 *           type: integer
 *           example: 0
 *         role:
 *           type: string
 *           example: "USER"
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         code:
 *           type: integer
 *         message:
 *           type: string
 *         body:
 *           type: object
 *       required:
 *        - status
 *        - code
 *        - message
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
