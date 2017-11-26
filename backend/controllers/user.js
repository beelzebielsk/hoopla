const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');

const userController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/'   ,modelController.index(this.index));
        router.post  ('/'   ,modelController.create(this.create));
        router.get   ('/:id',modelController.indexOne(this.indexOne));
        router.delete('/:id',modelController.delete(this.delete));
        router.put   ('/:id',modelController.modify(this.modify));

        return router;
    },

    indexOne(req, res){
        let id = parseInt(req.params.id);
        return models.User.findById(id);
    },

    index(req, res) {
        return models.User.findAll();
    },

    create(req, res) {
        let {email} = req.body;
        return models.User.create({email});
    },

    // Returns number of items deleted.
    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.User.destroy({
            where : {id}
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
}

module.exports = userController.registerRouter(modelController);
