const router = require('express').Router();
const cors = require('cors');
router.use(cors());
const ProfileController = require('../controllers/ProfileController');
router.get('/profile', ProfileController.getProfile);
module.exports = router;