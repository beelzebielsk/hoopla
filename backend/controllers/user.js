const express = require('express');
const models = require('../models');

const userController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/'   ,this.index);
        router.post  ('/'   ,this.create);
        router.get   ('/:id',this.indexOne);
        router.delete('/:id',this.delete);
        router.put   ('/:id',this.modify);

        return router;
    },

    index(req, res) {
        models.User.findAll()
        .then((results) => {
            res.json(results);
        })
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id)
        models.User.findById(id)
        .then(result => {
            res.json(result);
        })
    },

    create(req, res) {
        let {email} = req.body;
        models.User.create({email})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        })
    },

    delete(req, res) {
        let id = parseInt(req.params.id);
        models.User.destroy({
            where : {id}
        })
        .then(result => {
            console.log("Result:");
            console.log(result);
            res.end()
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        })
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {email} = req.body.email;
        // TODO: Check to see if the request is coming from the user
        // of the same id. Consider not putting the id in the URI at
        // all.
        models.User.update({email}, {
            where: {id}
        })
    }
}

module.exports = userController.registerRouter();
