const express = require('express');
const models = require('../models');
const { login } = require('./authenticator');

const loginController = {
    registerRouter() {
        const router = express.Router();

        router.post('/', this.login);

        return router;
    },

    login(req, res) {
        console.log(req.headers);
        console.log(req.body);
        let {username, password} = req.body;
        login(username, password)
        .then(loginResult => {
            if (loginResult.message === "ok") {
                res.json(loginResult);
            } else {
                res.status(401).json(loginResult);
            }
        });
    },
}

module.exports = loginController.registerRouter();
