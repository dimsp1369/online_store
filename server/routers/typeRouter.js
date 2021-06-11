const Router = require('express')
const router = new Router
const typeController = require('../controllers/typeControllers')


router.post('/', typeController.create) // метод создание типа
router.get('/', typeController.get) // метод получения типа


module.exports = router