const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');
const { guard } = require('./authenticator');

const postController = {
    registerRouter() {
        const router = express.Router();

        const index    = modelController.index(this.index);
        const create   = modelController.create(this.create);
        const indexOne = modelController.indexOne(this.indexOne);
        const destroy  = modelController.destroy(this.destroy);
        const modify   = modelController.modify(this.modify);

        router.get   ('/search',this.search);
        router.get   ('/'   ,index);
        router.post  ('/'   ,guard, create);
        router.get   ('/:id',indexOne);
        router.delete('/:id',guard, this.ownerGuard, destroy);
        router.put   ('/:id',guard, this.ownerGuard, modify);

        return router;
    },

    /*
    index(req, res) {
        return models.Post.findAll({
            include : [models.Category]
        });
    },
    */

    index(req, res) {
        return models.Post.findAll();
    },


    indexOne(req, res) {
        let id = parseInt(req.params.id)
        return models.Post.findById(id)
    },

    indexByTitle(req, res) {
        let title = parseInt(req.params.title);
        models.Post.findAll({
            where : {
                title: { 
                    $or: [
                        {$like: '%' + (req.params.title) + '%'}, 
                        {$like: (req.params.title) + '%'}, 
                        {$like: '%' + (req.params.title)}
                    ]
                }
            }
        });

    },

    create(req, res) {
        let {content, photo, title, UserId, PostId} = req.body;
        UserId = UserId ? parseInt(UserId) : UserId;
        // Only needed if post is a submission.
        PostId = PostId ? parseInt(PostId) : PostId;
        return models.Post.create(
            {content, photo, title, UserId, PostId});
    },

    destroy(req, res) {
        let id = parseInt(req.params.id);
        return models.Post.destroy({
            where : {id}
        });
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {content, photo, title, userId} = req.body;
        return models.Post.update({content, photo, title, userId}, {
            where: {id}
        });
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
                        {$like: '%' + (title) + '%'}, 
                        {$like: (title) + '%'}, 
                        {$like: '%' + (title)}
                    ]
                }
            }
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error("Error!");
            console.error(err);
            res.status(500).end()
        });
    },

    ownerGuard(req, res, next) {
        // It's assumed that this is called after passport strategy
        // has been called.
        let {id} = req.user;
        let postId = parseInt(req.params.id);
        models.Post.findById(postId)
        .then(result => {
            if (result === null) {
                next();
            } else if (result.UserId == id) {
                next();
            } else {
                res.status(401).json("Unauthorized.");
            }
        })
    },
}

module.exports = postController.registerRouter();
