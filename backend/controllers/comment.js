const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');

const commentController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/'   ,modelController.index(this.index));
        router.post  ('/'   ,modelController.create(this.create));
        router.get   ('/:id',modelController.indexOne(this.indexOne));
        router.delete('/:id',modelController.delete(this.delete));
        router.put   ('/:id',modelController.modify(this.modify));

        return router;
    },

    index(req, res) {
        return models.Comment.findAll();
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id);
        return models.Comment.findById(id);
    },

    create(req, res) {
        let {content, replyToId, PostId, UserId} = req.body;
        // Prevent from becoming NaN and causing problems in
        // Comment.create.
        replyToId = replyToId ? parseInt(replyToId) : replyToId;
        PostId    = PostId    ? parseInt(PostId)    : PostId;
        UserId    = UserId    ? parseInt(UserId)    : UserId;
        return models.Comment.create({replyToId, PostId, UserId, content});
    },

    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.Comment.destroy({
            where : {id}
        });
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {content, replyToId, postId, userId} = req.body;
        return models.Comment.update(
            {content, replyToId, postId, userId}, {
            where: {id}
        });
    },

}

module.exports = commentController.registerRouter();
