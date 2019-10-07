const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const { email } = req.body

            if (!email || email == "" || email == null || email == undefined)
                return res.status(400).json({ message: `Email must be valid` })


            else {
                let user = await User.findOne({ email }) // email: email

                if (!user) {
                    user = await User.create({ email })
                    return res.status(200).json({ message: `User ${email} created`, user })
                }
                else {
                    return res.status(400).json({ message: `An user with ${email} already exists` })
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    },

    // TODO: improvements on validations
    async show(req, res) {

        const { email } = req.body
        try {
            const user = await User.find({ email })
            console.log(user)
            return res.json(user)
        }
        catch (error) {
            console.log(error)
        }
    },

    async showAll(req, res) {
        try {
            let user = await User.find({})
            return res.json({ user })
        }
        catch (error) {
            console.log(error)
        }
    },


    async delete(req, res) {
        try {
            const { email } = req.body
            let user = await User.deleteOne({ email })

            return res.status(200).json({ message: `User ${email} deleted` })
        }
        catch (error) {
            console.log(error)
        }
    }
}