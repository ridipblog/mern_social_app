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
const userRoutes = require('./routes/UsersRoute');
app.use("/", registration);
app.use("/", login);
app.use("/", profile);
app.use("/", socialGoogleAuth);
app.use("/", Auth);
app.use("/", userRoutes);
console.log("Ok")
app.get('/index', (req, res) => {
    res.cookie('myCookie', 'Hello, World!', { maxAge: 900000, httpOnly: true });
    res.send("Ok");

    console.log("Ok");
})
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Server Running");
});

const io = require("socket.io")(server);
io.on('connection', (socket) => {
    console.log("Client is connected ");
    socket.on('join-room', (room) => {
        socket.join(room);
        console.log("Joined From " + room + " Room");
    });
    socket.on('leave-room', (room) => {
        socket.leave(room);
    });
    socket.on('message', ({ room, data }) => {
        console.log('message recived');
        const recive_data = {
            message: data.message,
            username: data.username
        };
        console.log(data);
        console.log(room);
        io.to(room).emit('message', room, recive_data);
    });
    socket.on('disconnect', () => {
        console.log("Client disconnected ");
    });
})
