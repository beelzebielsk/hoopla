const express = require('express');
const models = require('../models');
const modelController = require('./model-controller');

const postController = {
    registerRouter() {
        const router = express.Router();

        router.get   ('/search',this.search);

        router.get   ('/'   ,modelController.index(this.index));
        router.post  ('/'   ,modelController.create(this.create));
        router.get   ('/:id',modelController.indexOne(this.indexOne));
        router.delete('/:id',modelController.delete(this.delete));
        router.put   ('/:id',modelController.modify(this.modify));

        return router;
    },

    index(req, res) {
        return models.Post.findAll({
            include : [models.Category]
        });
    },

    indexOne(req, res) {
        let id = parseInt(req.params.id)
        return models.Post.findById(id)
    },

    create(req, res) {
        let {content, photo, title, UserId, PostId} = req.body;
        UserId = UserId ? parseInt(UserId) : UserId;
        // Only needed if post is a submission.
        PostId = PostId ? parseInt(PostId) : PostId;
        return models.Post.create(
            {content, photo, title, UserId, PostId});
    },

    delete(req, res) {
        let id = parseInt(req.params.id);
        return models.Post.destroy({
            where : {id}
        });
    },

    modify(req, res) {
        let id = parseInt(req.params.id);
        let {content, photo, title, userId} = req.body;
        return models.User.update({content, photo, title, userId}, {
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
                        {$like: '% ' + (req.params.title) + ' %'}, 
                        {$like: (req.params.title) + ' %'}, 
                        {$like: '% ' + (req.params.title)}
                    ]
                }
            }
        })
        .then(result => {
        })
        .catch(err => {
            console.error("Error!");
            console.error(err);
            res.status(500).end()
        });
    },

}

module.exports = postController.registerRouter();
