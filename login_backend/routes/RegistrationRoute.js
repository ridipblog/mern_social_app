const router = require('express').Router();
const bodyParser = require('body-parser');
const encoded = bodyParser.urlencoded({ extended: true });

const cors = require('cors');
// var corsOptions = {
//     origin: "http://localhost:4000"
// };
router.use(cors());
const RegistrationController = require('../controllers/RegistrationController');
router.post('/registration', encoded, RegistrationController.storeRegistration);
module.exports = router;