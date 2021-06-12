const Router = require('express')
const router = new Router
const typeController = require('../controllers/typeControllers')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole("ADMIN"),typeController.create) // метод создание типа
router.get('/', typeController.get) // метод получения типа


module.exports = router