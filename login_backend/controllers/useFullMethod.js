const jwt = require('jsonwebtoken');
const secretKey = "jhgdjsd212";
const generateToken = async (email) => {
    var token = await jwt.sign({ email: email }, secretKey);
    return token;
}
const verifyToken = async (token) => {
    var token_data = jwt.verify(token, secretKey);
    return token_data;
}
module.exports = {
    generateToken,
    verifyToken
}