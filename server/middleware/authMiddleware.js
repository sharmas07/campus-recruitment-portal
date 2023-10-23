import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
const authMiddleware = (req, res, next)=>{
    console.log('auth middleware got hit');
    // Get the user from jwt auth token
    const token = req.header("auth_token")
    if(!token){ // send 401 response if token not present in request header
        res.status(401).json({error: "please authenticate using a valid token"});
        return;
    }
    try {
        const data = jwt.verify(token, jwtSecret);
        // set header with username, userid and email
        req.user = data.user;
        console.log(data.user)
        next();
    } catch (error) {
        res.status(401).json({error: "please authenticate using a valid token"});
        return;
    }

}
export default authMiddleware;