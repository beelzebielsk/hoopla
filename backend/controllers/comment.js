const express = require('express');
const models = require('../models');

const commentController = {
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
        models.Comment.findAll()
        .then((results) => res.json(results))
        .catch(err => {
            console.error("Error:");
            console.error(err);
            res.status(500).end();
        })
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id)
        models.Comment.findById(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error("Error:");
            console.error(err);
            res.status(500).end();
        })
    },

    create(req, res) {
        let {content, replyToId, PostId, UserId} = req.body;
        // Prevent from becoming NaN and causing problems in
        // Comment.create.
        replyToId = replyToId ? parseInt(replyToId) : replyToId;
        PostId    = PostId    ? parseInt(PostId)    : PostId;
        UserId    = UserId    ? parseInt(UserId)    : UserId;
        models.Comment.create({replyToId, PostId, UserId, content})
        .then(result => {
            console.log(result);
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
        models.Comment.destroy({
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
        let {content, replyToId, postId, userId} = req.body;
        models.Comment.update({content, replyToId, postId, userId}, {
            where: {id}
        })
        .catch(err => {
            console.error("Error:");
            console.error(err);
            res.status(500).end();
        });
    },

}

module.exports = commentController.registerRouter();
