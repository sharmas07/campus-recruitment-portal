import bcrypt from 'bcrypt';
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

// user signup controller
export const login = async (req, res) => {
    console.log(req.body.username)
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
        return res.status(400).json("user not found");
    }
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) {
        return res.status(400).json("invalid credentials");
    }
    const userData = {
        user: {
            username: user.username, id: user._id
        }
    }
    const auth_token = jwt.sign(userData, process.env.JWT_SECRET)
    res.status(200).json({ user, auth_token })

}

// new user signup
export const signup = async (req, res) => {
    console.log('SIGNUP user got hit')
    const salt = await bcrypt.genSalt(5);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPass;
    const newUser = new User(req.body)
    const email = req.body.email;
    try {
        const oldUser = await User.findOne({ email: email })
        if (oldUser) {
            return res.status(400).json("user already exist");
        }
        const user = await newUser.save()

        const userData = {
            user: {
                username: user.username, id: user._id
            }
        }
        const auth_token = jwt.sign(userData, process.env.JWT_SECRET)

        res.status(200).json({ user, auth_token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}