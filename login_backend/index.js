require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(cors({
    // origin: 'http://localhost:3000',
    credentials: true, // Allow credentials (cookies)
}));

const encoded = bodyParser.urlencoded({ extended: true });
app.use(encoded);
app.use(cookieParser());
app.use(express.json());
const registration = require('./routes/RegistrationRoute');
const login = require('./routes/LoginRoute');
const profile = require('./routes/ProfileRoute');
const socialGoogleAuth = require('./routes/GoogleAuth');
const Auth = require('./routes/AuthRoute');
app.use("/", registration);
app.use("/", login);
app.use("/", profile);
app.use("/", socialGoogleAuth);
app.use("/", Auth);
console.log("Ok")
app.get('/index', (req, res) => {
    res.cookie('myCookie', 'Hello, World!', { maxAge: 900000, httpOnly: true });
    res.send("Ok");

    console.log("Ok");
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server Running");
});
