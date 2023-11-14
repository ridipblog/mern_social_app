const router = require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const encoded = bodyParser.urlencoded({ extended: true });
router.use(cors());
const LoginController = require('../controllers/LoginController');
router.post('/login', encoded, LoginController.storeLogin);
module.exports = router;