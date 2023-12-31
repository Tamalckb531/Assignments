const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(" ")[1];

    try {
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        if (decoded.username) {
            req.username = decoded.username;
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }catch(e){
        res.json({
            msg: "Error occured"
        })
    }

}

module.exports = userMiddleware;