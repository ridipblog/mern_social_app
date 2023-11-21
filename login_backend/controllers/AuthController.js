const db = require('../models/index');
const users = require('../models/users');
const useFullMethod = require('../controllers/useFullMethod');
const User = db.users;
const verifyUserToken = async (req, res) => {
    const token = req.query.token;
    const result = {
        status: 400,
        message: null
    };
    if (token) {
        const token_email = await useFullMethod.verifyToken(token);
        const check_user = await User.findOne({
            where: {
                email: token_email.email
            }
        });
        if (check_user) {
            result.message = check_user;
            result.status = 200;
        }
    }
    res.status(200).json(result);
}
module.exports = {
    verifyUserToken
}
