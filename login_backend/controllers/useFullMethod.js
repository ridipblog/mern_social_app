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
const randPassword = async () => {
    const string = "abcdefghijklmnopqrstuvwxyz";
    var rand_pass = "";
    for (var i = 0; i < 6; i++) {
        const rand_num = Math.floor(Math.random() * (string.length - 1));
        rand_pass += string[rand_num];
    }
    return rand_pass;
}
module.exports = {
    generateToken,
    verifyToken,
    randPassword
}
