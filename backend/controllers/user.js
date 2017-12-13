const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');
const { guard } = require('./authenticator');

const userController = {
    registerRouter() {
        const router = express.Router();

        const index    = modelController.index(this.index);
        const create   = modelController.create(this.create);
        const indexOne = modelController.indexOne(this.indexOne);
        const destroy  = modelController.destroy(this.destroy);
        const modify   = modelController.modify(this.modify);

        router.get   ('/search', this.search);
        router.get   ('/registration', this.registration);
        router.get   ('/'   ,index);
        router.post  ('/'   ,create);
        router.get   ('/:id',indexOne);
        router.delete('/:id',guard, this.ownerGuard, destroy);
        router.put   ('/:id',guard, this.ownerGuard, modify);

        return router;
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id);
        return models.User.findById(id);
    },

    index(req, res) {
        return models.User.findAll();
    },

    create(req, res) {
        let {email, password, username} = req.body;
        return models.User.create({email, username, password});
    },

    // Returns number of items destroyd.
    destroy(req, res) {
        let id = parseInt(req.params.id);
        return models.User.destroy({
            where : {id}
        });
    },

    search(req, res) {
        let {title} = req.query;
        models.User.findAll({
            where: { 
                username: { 
                    $or: [
                        {$like: '%' + (title) + '%'}, 
                        {$like: (title) + '%'}, 
                        {$like: '%' + (title)}
                    ]
                }
            }
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error("Error!");
            console.error(err);
            res.status(500).end()
        });
    },

    // see if user/email exist
    registration(req, res) {
        let {email} = req.query;
        let {user} = req.query;
        models.User.findAll({
            where: { 
                $or: [
                    {
                        email: {$like: (email)}
                    },
                    {
                        username: {$like: (user)}
                    }
                ]
            }
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error("Error!");
            console.error(err);
            res.status(500).end()
        });
    },

    // Returns number of items modified, Though it does so in an
    // array.
    modify(req, res) {
        let id = parseInt(req.params.id);
        let {email} = req.body;
        return models.User.update({email}, {
            where: {id}
        });
    },

    ownerGuard(req, res, next) {
        if (req.params.id === req.user.id) {
            next()
        } else {
            res.status(401).send("Unauthorized.");
        }
    },
}

module.exports = userController.registerRouter(modelController);
