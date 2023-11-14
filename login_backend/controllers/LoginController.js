const db = require('../models/index');
const users = require('../models/users');
const useFullMethod = require('./useFullMethod');
const bcrypt = require('bcrypt');
const User = db.users;
const storeLogin = async (req, res) => {
    const { email, password } = req.body;
    const result = {
        message: null,
        status: 400
    };
    if (email == "" || password == "") {
        result.message = "Fill All Credentials !";
    } else {
        const get_users = await User.findOne({
            where: {
                email: email
            }
        });
        if (get_users) {
            check = await bcrypt.compare(password, get_users.password)
                .then((res) => {
                    return res;
                }).catch((err) => {
                    return false;
                });
            if (check) {
                const token = await useFullMethod.generateToken(email);
                const update_data = await User.update({
                    token: token
                }, {
                    where: {
                        email: get_users.email
                    },
                });
                result.message = token;
                result.status = 200;
            } else {
                result.message = "Password Is Not Matched !";
            }
        } else {
            result.message = "User Email ID Not Found ";
        }
    }
    res.status(200).json(result);
}
module.exports = {
    storeLogin
}