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
const LoginWithGoole = async (req, res) => {
    const login_email = req.query.login_email;
    const given_name = req.query.given_name;
    const result = {
        status: 400,
        message: null
    };
    if (login_email) {
        const login_data = await User.findOne({
            where: {
                email: login_email
            }
        });
        if (login_data) {
            const token = await useFullMethod.generateToken(login_email);
            var check = true;
            try {
                const update_data = await User.update({
                    token: token
                }, {
                    where: {
                        email: login_email
                    },
                });
            } catch (error) {
                check = false;
            }
            if (check) {
                result.message = token;
                result.status = 200;
            } else {
                result.message = "Try Later ! Server Error ";
            }
        } else {
            const rand_pass = await useFullMethod.randPassword();
            const hash_pass = await bcrypt.hash(rand_pass, 10);
            const token = await useFullMethod.generateToken(login_email);
            const user_data = {
                name: given_name,
                email: login_email,
                password: hash_pass,
                token: token
            };
            var check = true;
            try {
                const save_user = await User.create(user_data);
            } catch (err) {
                check = false;
            }
            if (check) {
                result.message = token;
                result.status = 200;
            } else {
                result.message = "Try Later Server Error";
            }

        }
    } else {
        result.message = "Login Email Not Found !";
    }
    res.status(200).json(result);
}
module.exports = {
    storeLogin,
    LoginWithGoole
}
