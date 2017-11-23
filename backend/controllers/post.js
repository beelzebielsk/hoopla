const express = require('express');
const models = require('../models');

const postController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/'      ,this.index);
        router.get   ('/search',this.search);
        router.post  ('/'      ,this.create);
        router.get   ('/:id'   ,this.indexOne);
        router.delete('/:id'   ,this.delete);
        router.put   ('/:id'   ,this.modify);

        return router;
    },

    index(req, res) {
        models.Post.findAll({
            include : [models.Category]
        })
        .then((allPosts) => {
            res.json(allPosts);
        })
        .catch(err => {
            res.send("Error!");
        })
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id)
        models.Post.findById(id)
        .then(user => {
            res.json(user);
        });
    },

    create(req, res) {
        let {content, photo, title, UserId, PostId} = req.body;
        UserId = UserId ? parseInt(UserId) : UserId;
        // Only needed if post is a submission.
        PostId = PostId ? parseInt(PostId) : PostId;
        models.sequelize.transaction(transaction => {
            return models.Post.create({
                content, photo, title, UserId, PostId
            }, {transaction})
        })
        .then(result => {
            console.log("transaction result:");
            res.json(result.dataValues);
        })
        .catch(err => {
            console.log("Error:")
            console.log(err)
            res.status(500).end();
        });
    },

    delete(req, res) {
        let id = parseInt(req.params.id);
        models.Post.destroy({
            where : {id}
        })
        .then(result => {
            console.log("transaction result:");
            console.log(result);
            res.end();
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        })
    },

    search(req, res) {
        let {title, categories} = req.query;
        if (!Array.isArray(categories)) {
            categories = [categories];
        }
        models.Post.findAll({
            where: { 
                title: { 
                    $or: [
                        {$like: '% ' + (req.params.title) + ' %'}, 
                        {$like: (req.params.title) + ' %'}, 
                        {$like: '% ' + (req.params.title)}
                    ]
                }
            }
        })  
        .then(post => {
            res.json(post);
        })
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {content, photo, title, userId} = req.body;
        models.User.update({content, photo, title, userId}, {
            where: {id}
        })
        .catch(err => {
            console.log("Error:");
            console.log(err);
            res.status(500).end();
        });
    },
}

/*
 * TODO: Look up concept of URI. Perhaps the method of access of a
 * resource should be uniform across this controller (ie if you want
 * to get/update/delete the record with id == 21, then the URL is
 * site/post/byId/21, and you just specify different methods for the
 * different actions. Right now, we have very similar looking URIs,
 * one for title and for id.
 */

module.exports = postController.registerRouter();
