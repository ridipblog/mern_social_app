const db = require('../models/index');
const users = require('../models/users');
const User = db.users;
const useFullMethod = require('./useFullMethod');
const getProfile = async (req, res) => {
    const data = {
        email: null
    };
    const token_data = await useFullMethod.verifyToken(req.query.token);
    data.email = token_data.email;
    console.log(token_data);
    res.status(200).json(data);
}
module.exports = {
    getProfile
}
