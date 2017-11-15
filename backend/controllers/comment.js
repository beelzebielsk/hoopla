const express = require('express');
const models = require('../models');

const commentController = {
    registerRouter() {
        const router = express.Router();
        router.get   ('/'   ,this.index);
        router.post  ('/'   ,this.create);
        router.delete('/:id',this.delete);

        return router;
    },

    index(req, res) {
        models.Comment.findAll()
        .then((allComments) => res.json(allComments))
        .catch(err => {
            console.error(err);
            res.status(500).send("Error!");
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
            console.log("Error:")
            console.log(err)
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
}

module.exports = commentController.registerRouter();
