const express = require('express')
require('dotenv').config() //необходим для считывания данных из файла .env
const sequelize = require("./db")
const models = require('./models/models')
const CORS = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routers/indexRouter')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000 // номерта порта будет браться из переменной окружения файла .env, если порт не задан по умчанию используется 5000

const app = express()
app.use(CORS())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка обибки производится в самом конце
app.use(errorHandler)


//Функция для подключения к базе данных
const start = async () => {
    try {
        await sequelize.authenticate() // с помощью данной функции будет устанавливаться подключение к БД
        await sequelize.sync() // сверяет состояние базы данных со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) { // catch для отлова потенциальных ошибок
        console.log(e)
    }
}

start()

