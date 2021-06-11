const Router = require('express')
const router = new Router
const userController = require('../controllers/userControllers')


router.post('/registration', userController.registration) // регистрация пользователя
router.post('/login', userController.login) // подписка пользователя
router.get('/auth', userController.check) // аутентификация пользователя


module.exports = router