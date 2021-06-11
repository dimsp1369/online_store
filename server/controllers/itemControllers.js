const uuid = require('uuid')
const path = require('path')
const {Item, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemControllers {
    async create(req, res, next) {
        try {
            let {name, price, info, typeId, brandId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const item = await Item.create({name, price, typeId, brandId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => ItemInfo.create({
                    title: i.title,
                    description: i.description,
                    itemId: item.id
                }))
            }
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async get(req, res) {
        let {typeId, brandId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let item;
        if (!brandId && !typeId) {
            item = await Item.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            item = await Item.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            item = await Item.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            item = await Item.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }
        return res.json(item)
    }
    async getById(req, res) {
const {id} = req.params
        const item = await Item.findOne(
            {
                where:{id},
                include: [{model: ItemInfo, as: 'item_info'}]
            }
        )
        return res.json(item)
    }
}

module.exports = new ItemControllers()