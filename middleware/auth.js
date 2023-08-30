const jwt = require('jsonwebtoken');
const user = require('../models/users');
module.exports = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifyToken = jwt.verify(token, 'secret')
        if (await user.findById(verifyToken.data.id)) {
            next();
        } else {
            res.status(401).json({ message: "Invalid token credentials" })
        }
    } catch (error) {
        res.status(401).json({ message: "Invalid token credentials" })
    }
}