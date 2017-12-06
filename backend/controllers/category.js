const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');
const { guard } = require('./authenticator');

const categoryController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/'   ,modelController.index(this.index));
        router.post  ('/'   ,modelController.create(this.create));
        router.get   ('/:id',modelController.indexOne(this.indexOne));
        router.delete('/:id',modelController.destroy(this.destroy));
        router.put   ('/:id',modelController.modify(this.modify));

        return router;
    },

    index(req, res) {
        return models.Category.findAll();
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id);
        return models.Category.findById(id);
    },

    create(req, res) {
        let {name} = req.body;
        return models.Category.create({name});
    },

    destroy(req, res) {
        let id = parseInt(req.params.id);
        return models.Category.destroy({
            where : {id}
        });
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {name} = req.body;
        return models.Category.update({name}, {
            where : {id}
        });
    },

}

module.exports = categoryController.registerRouter();

