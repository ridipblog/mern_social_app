const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const encoded = bodyParser.urlencoded({ extended: true });
app.use(encoded);
app.use(express.json());
const registration = require('./routes/RegistrationRoute');
const login = require('./routes/LoginRoute');
const profile = require('./routes/ProfileRoute');
app.use("/", registration);
app.use("/", login);
app.use("/", profile);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server Running");
});
