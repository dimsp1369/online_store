const Router = require('express')
const router = new Router
const brandController = require('../controllers/brandControllers')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), brandController.create) // метод создание брэнда
router.get('/', brandController.get)// метод получения брэнда


module.exports = router