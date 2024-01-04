const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const tokenArray = token.split(" "); // ["Bearer", "token"]
    const jwtToken = tokenArray[1]; // "token"

    try{
        const decoded = jwt.varify(jwtToken, JWT_SECRET); //will return the payload
        if(decoded.username){
            next();
        }else{
            res.status(403).json({
                msg:"Authentication failed"
            })
        }
    }catch(e){
        res.json({
            msg: "Error occured"
        })
    }
}

module.exports = adminMiddleware;