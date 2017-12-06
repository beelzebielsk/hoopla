const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-jwt");
// For finding user IDs.
const models = require("../models");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const secret = "One time I... no. I can't say it."
const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : secret,
}

const strategy = new JwtStrategy(jwtOptions, (payload, next) => {
    console.log("Payload received", payload);
    models.User.findById(payload.id)
    .then(result => {
        if(result) {
            next(null, result);
        } else {
            next(null, false);
        }
    });
});

// I assume that this is necessary to create the guard.
passport.use(strategy);

// Returns a promise which will resolve to the json message to send
// back to someone attempting to login.
const login = (username, password) => {
    if (!username || !password) {
        return new Promise((resolve, reject) => {
            resolve({message: "missing username or password"});
        })
    }
    return models.User.findOne({
        where : { username }
    })
    .then( result => {
        if (result === null) {
            return {message: "Username does not exist."};
        } else if (result.password !== password) {
            return {message: "Invalid password."};
        } else {
            let payload = {id: result.id};
            let token = jwt.sign(payload, secret);
            return {message: "ok", token};
        }
    });
}

module.exports = {
    guard : passport.authenticate('jwt', {session : false}),
    strategy : strategy,
    login : login,
}
