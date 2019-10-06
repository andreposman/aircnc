const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {

    async index(req, res) {
        const { tech } = req.query
        const spots = await Spot.find({ techs: tech })

        return res.json(spots)
    },

    async show(req, res) {
        const { spot_id } = req.headers
        console.log(req.headers)

        const spot = await Spot.findById({ spot_id })
        console.log(spot)

        if (!spot || spot == '' || spot == undefined || spot.length <= 0)
            return res.status(400).json({ error: "Spot does not exist" })

        else
            return res.status(200).json(spot)

    },

    async store(req, res) {
        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user)
            return res.status(400).json({
                error: 'User does not exist.'
            })

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    },

    async delete(req, res) {
        const { spot_id } = req.headers
        const spot = await Spot.deleteOne({ spot_id })

        return res.status(200).json({ message: "Spot deleted", spot })
    },
}