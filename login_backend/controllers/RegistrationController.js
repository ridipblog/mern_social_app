const db = require('../models/index');
const users = require('../models/users');
const bcrypt = require('bcrypt');
const User = db.users;

const storeRegistration = async (req, res) => {
    const { username, email, password, checked } = req.body;
    const result = {
        message: null,
        status: 400
    }
    if (username == "" || email == "" || password == "") {
        result.message = "Please Fill All Inputs Field !";
    } else {
        if (checked) {
            const get_users = await User.findOne({
                where: {
                    email: email
                }
            });
            if (get_users) {
                result.message = "Already use the email ID";
            } else {
                const hash_pass = await bcrypt.hash(password, 10);
                const user_data = {
                    name: username,
                    email: email,
                    password: hash_pass,
                };
                var check = null;
                try {
                    const save_user = await User.create(user_data);
                    check = true;
                } catch (e) {
                    check = false;
                }
                if (check) {
                    result.message = "User Registration Successfull ";
                    result.status = 200;
                } else {
                    result.message = "Try Later ! Some Error Server";
                }
            }
        } else {
            result.message = "Please Checked Terms Box";
        }
    }
    res.status(200).json(result);
}
module.exports = {
    storeRegistration
};