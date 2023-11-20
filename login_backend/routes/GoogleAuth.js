require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const googleStrategy = require('passport-google-oauth2');
const checkAuthMiddle = require('../middleware/checkLoged');
const useFullMethod = require('../controllers/useFullMethod');
// const app = express();

router.use(cors());

router.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true
    })
);
passport.use(
    new googleStrategy({
        clientID:
            "784573559341-eep7r56u6kom5hvqqh9bc5gskijqh0el.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "/auth/google/callback",
    },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
router.use(passport.initialize());
router.use(passport.session());
router.get(
    "/auth/google",
    checkAuthMiddle.checkIsLogin,
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);
router.get(
    "/auth/google/callback",
    checkAuthMiddle.checkIsLogin,
    passport.authenticate("google", {
        failureRedirect: "/",
    }),
    async (req, res, next) => {
        const result = {
            status: null,
            message: null
        };
        console.log(req.user);
        res.redirect("/");

    }
);
router.get("/user", async (req, res) => {
    const result = {
        stauts: 200,
        message: "Ok"
    }
    res.json(result);
})
module.exports = router;