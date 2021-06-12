const Router = require('express')
const router = new Router
const itemController = require('../controllers/itemControllers')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'),itemController.create) // метод создание товара
router.get('/', itemController.get)// метод получения товара
router.get('/:id', itemController.getById) //подучения конкретного товара по id


module.exports = router