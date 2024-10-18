const User = require('../models/userModel')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')

//registration endpoint
const registerUser = async (req, res) => {
    try{
        //get registration inputs
        const {full_name, username, email, password, confirm_password } = req.body

        //Check if full name was entered
        if(!full_name) {
            return res.json({
                error: 'Please enter your full name'
            })
        }

        //Check if full name was entered
        if(!username) {
            return res.json({
                error: 'Please enter your username'
            })
        }

        //Check is password is valid
        if(!password || password.trim() < 6){
            return res.json({
                error: 'Please enter a password that is more than 6 characters'
            })
        }

        //Check if password and confirm password match 
        if(password != confirm_password){
            return res.json({
                error: "Your passowrds don't match"
            })
        }

        //Check if username is available
        const userExists = await User.findOne({username})
        if(userExists){
            return res.json({
                error: 'Username is already taken.'
            })
        }

        const hashedPassword = await hashPassword(password)


        const user = await User.create({
            full_name, username, email, password: hashedPassword
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
    }

}
 
//login endpoint
const loginUser = async (req, res) => {
    try{
        const {username, password} = req.body

        //Check if user exists
        const user = await User.findOne({username})
        if(!user) {
            return res.json({
                error: "This user does not exist. Please try again."
            })
        }

        //Check if passwords match
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.json({
                error: "The password was incorrect for this user. Please try again."
            })
        } else {
            //start session with jsonwebtoken
            jwt.sign({username: user.username, id: user._id}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
    }catch (error){
        console.log(error)
    }
}

//User's profile endpoint
const getUserProfile = (req, res) => {
    const {token} = req.cookies
    //if a token (a session) exists on the page
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {registerUser, loginUser, getUserProfile}