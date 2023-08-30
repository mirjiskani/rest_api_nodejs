const bcrypt = require('bcrypt');
const User = require('../models/users')
const jwt = require('jsonwebtoken');
const doteve = require('dotenv').config();

const jwt_secret = process.env.JWT_SECRET;

const getLogin = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email });

    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const data = {
                id: user._id,
                name: user.name,
                email: user.email
            }
            //{
            //     expiresIn: '1h'
            // }
            const signedToken = jwt.sign({ data }, 'secret');
            res.status(200).json({ message: "Logged in successfully", data: user, token: signedToken })
        } else {
            res.status(200).json({ message: "Invalid credentials", data: user })
        }
    } else {
        res.status(401).json({ message: "User not exist" })
    }
};

const getListOfUsers = async (req, res, next) => {
    const filter = {};
    const all = await User.find(filter);
    res.status(200).json({ message: 'Users fetched', data: all })
}

const createUser = async (req, res, next) => {
    const { name, email, password } = req.body
    const userExist = await User.findOne({ email: email });
    if (userExist) {
        res.send('User already exists')
    } else {
        const hashPassword = await bcrypt.hash(password, 12);
        const data = new User({ name: name, email: email, password: hashPassword });
        try {
            const result = await data.save()
            res.status(200).json({ "message": "User has created" });
        } catch (error) {
            res.status(201).json(error);
        }
    }
}

const updateUser = async (req, res, next) => {
    const { _id, name } = req.body
    const userExist = await User.findOne({ _id: _id });
    if (!userExist) {
        res.status(403).json({ message: "Something went wrong" })
    } else {
        try {
            const result = await User.updateOne({ name: name }).where({ _id: _id });
            res.status(200).json({ "message": "User updated created" });
        } catch (error) {
            res.status(201).json(error);
        }
    }
}

const deleteUser = async (req, res, next) => {
    const { _id } = req.body
    const isDeleted = await User.deleteOne({ _id: _id });
    if (isDeleted) {
        res.status(200).json({ message: "User deleted" })
    } else {
        res.status(401).json({ message: "User deleted successfully" })
    }
}
module.exports = {
    getListOfUsers,
    getLogin,
    createUser,
    updateUser,
    deleteUser
}