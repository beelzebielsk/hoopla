const express = require('express');
const models = require('../models');

const userController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/'   ,this.index);
        router.get   ('/:id',this.indexOne);
        router.post  ('/'   ,this.create);
        router.delete('/:id',this.delete);

        return router;
    },
    index(req, res) {
        models.User.findAll()
        .then((allUsers) => {
            res.json(allUsers);
        })
    },
    indexOne(req, res) {
        let id = parseInt(req.params.id)
        models.User.findById(id)
        .then(user => {
            res.json(user);
        })
    }
    create(req, res) {
        let {email} = req.body;
        models.User.create({email})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log("Error:")
            console.log(err)
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
}

module.exports = userController.registerRouter();
