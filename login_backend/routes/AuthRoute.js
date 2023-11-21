const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const AuthController = require('../controllers/AuthController');
router.get('/check_auth', AuthController.verifyUserToken);
module.exports = router;
