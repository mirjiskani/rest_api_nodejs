const express = require('express')
const router = express.Router()
const {
    getListOfUsers,
    getLogin,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// getting uses

router.get("/", getListOfUsers)

// getting validated user

router.post('/login', getLogin);

// creating users 
router.post("/create", createUser)

//Updating users

router.put("/update", updateUser)

// deleting users
router.delete("/delete", deleteUser)

// Importing the router
module.exports = router