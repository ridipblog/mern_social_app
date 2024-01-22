const db = require("../models/index");
const UserModel = db.users;
const getAllUsers = async (req, res) => {
    try {
        var users = await UserModel.findAll();
        return res.status(200).json({
            status: 200,
            users: users
        });
    } catch (error) {
        return res.status(200).json({
            status: 400,
            message: "Server error please try later !"
        });
    }
}

module.exports = {
    getAllUsers
}
