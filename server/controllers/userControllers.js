const ApiError = require('../error/ApiError')

class UserControllers {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
    const {id} = req.query
        if (!id) {
           return next(ApiError.badRequest('Id undefined'))
        }
        res.json(id)
    }
}

module.exports = new UserControllers()