const express = require('express')
const router = express.Router()
const {
    getListOfUsers,
    getLogin,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const auth = require('../middleware/auth');

// getting uses

router.get("/",auth, getListOfUsers)

// getting validated user

router.post('/login', getLogin);


// creating users 
router.post("/create",auth, createUser)

//Updating users

router.put("/update",auth, updateUser)

// deleting users
router.delete("/delete",auth, deleteUser)

// Importing the router
module.exports = router