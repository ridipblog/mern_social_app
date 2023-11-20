const db = require('../models/index');
const users = require('../models/users');
const User = db.users;
const checkIsLogin = async (req, res, next) => {
    if (req.cookies.token) {
        res.redirect('http://localhost:3000/profile');
    } else {
        next();
    }
}
module.exports = {
    checkIsLogin
}