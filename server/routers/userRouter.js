const Router = require('express')
const router = new Router
const userController = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', userController.registration) // регистрация пользователя
router.post('/login', userController.login) // подписка пользователя
router.get('/auth', authMiddleware ,userController.check) // аутентификация пользователя


module.exports = router