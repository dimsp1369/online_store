const Router = require('express')
const router = new Router
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const itemRouter = require('./itemRouter')

//Выполняем насткойку роутеров

router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router