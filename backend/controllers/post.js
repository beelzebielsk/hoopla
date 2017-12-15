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
        // Expected parameters:
        // - title: Searches for posts with given text as substring of
        //   post title.
        // - content: Searches for posts with given text as substring
        //   of post content.
        // - contains: Searches for posts with given text as substring
        //   of either post title or post content.
        // - category: searches for posts categorized as given
        //   category.
        let {title, category, content, contains} = req.query;
        // API uses the name category, but makes more sense to call it
        // categories, since I expect to see more than one.
        let categories = category;
        console.log("Query:", req.query);
        if (categories && !Array.isArray(categories)) {
            categories = [categories];
        }

        let conditions = { $and : [] };
        let includes = [];
        let selectNone = [];

        if (title) {
            conditions['$and'].push({
                title: textContains(title)
            })
        }
        if (content) {
            conditions['$and'].push({
                content: textContains(content)
            })
        /* Note: Including categories means that only posts with
         * categories will show up. Uncategorized posts will no longer
         * appear in the search results (if a category is specified).
         */
        } 
        if (contains) {
            conditions['$and'].push({
                $or : [
                    { title : textContains(contains) },
                    { content : textContains(contains) },
                ]
            })
        }
        if (categories) {
            includes.push({
                model : models.Category,
                where : {
                    name : {
                        $and : categories.map(textContains)
                    }
                },
                // No attributes of category in query results.
                attributes: selectNone,
            })
        }
        /*
        includes.push({
            model : models.Post,
            as: 'submissionTo',
            attributes: selectNone,
        })
        */
        console.log(JSON.stringify({
            where: conditions,
            include: includes
        }, null, ' '))
        models.Post.findAll({
            where: conditions,
            include: includes,
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

let textContains = (text) => {
    return {
        $or : [
            {$like: '%' + (text) + '%'}, 
            {$like: (text) + '%'}, 
            {$like: '%' + (text)}
        ]}}

module.exports = postController.registerRouter();
