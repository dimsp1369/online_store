const Router = require('express')
const router = new Router
const basketController = require('../controllers/basketControllers')


router.post('/', basketController.create) // метод создание корзины с товыром
router.get('/:id', basketController.getById) //подучения конкретной корзины по id


module.exports = router