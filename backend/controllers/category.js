const express = require('express');
const models = require('../models');

const categoryController = {
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
        models.Category.findAll()
        .then((results) => {
            res.json(results);
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        });
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id)
        models.Category.findById(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        });
    },

    create(req, res) {
        let {name} = req.body;
        models.Category.create({name})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        });
    },

    delete(req, res) {
        let id = parseInt(req.params.id);
        models.Category.destroy({
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
        });
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {name} = req.body;
        models.Category.update({name}, {
            where : {id}
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        });
    },

}

module.exports = categoryController.registerRouter();

