const express = require('express')
const router = express.Router()
const cors = require('cors')
const {registerUser, loginUser, getUserProfile} = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173"
    })
)

//route to user registration controller
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getUserProfile)

module.exports = router