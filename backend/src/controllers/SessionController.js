const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const {
            email
        } = req.body

        let user = await User.findOne({
            email
        }) // email: email

        if (!user) {
            user = await User.Create({
                email
            })
        }

        return res.status(200).json(user)
    }
}