const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');
const { guard } = require('./authenticator');

const commentController = {
    registerRouter() {
        const router = express.Router();

        const index    = modelController.index(this.index);
        const create   = modelController.create(this.create);
        const indexOne = modelController.indexOne(this.indexOne);
        const destroy  = modelController.destroy(this.destroy);
        const modify   = modelController.modify(this.modify);

        router.get   ('/'   ,index);
        router.post  ('/'   ,guard, create);
        router.get   ('/:id',indexOne);
        router.delete('/:id',guard, this.ownerGuard, destroy);
        router.put   ('/:id',guard, this.ownerGuard, modify);

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

    destroy(req, res) {
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

    ownerGuard(req, res, next) {
        let {id} = req.user;
        let commentId = parseInt(req.params.id);
        models.Comment.findById(commentId)
        .then(result => {
            //console.log(result);
            //console.log("User's id:", id);
            //console.log("Comment's id:", commentId);
            if (result === null) {
                // Let the normal handler handle this.
                next();
            } else if (result.UserId === id) {
                next();
            } else {
                res.status(401).json("Unauthorized.");
            }
        })
    },

}

module.exports = commentController.registerRouter();
