const router = require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const encoded = bodyParser.urlencoded({
    extended: true
});
const UserController = require('../controllers/UserController');
router.get('/get-all-users', UserController.getAllUsers);
module.exports = router;
