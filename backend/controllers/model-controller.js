const express = require('express');

/* 
 * Class for controllers that access a resource stored in a database.
 * It'll make some of the basic things across those controllers
 * common, but leave flexibility so that some controllers can do some
 * stuff that's specific to their models.
 * What's common among the controllers:
 * - Creation of a resource.
 * - Modification of a resource.
 * - Deletion of a resource.
 * - Obtaining a specific resource noted by a URI.
 * - Obtaining all resources.
 *
 * The create/index/destroy/create Route functions expect for create,
 * index, destroy, and creation functions to be defined on the object.
 * Those functions should return a promise, as sequelize functions do.
 * The route functions wrap the task of getting stuff from a database
 * in webserver functionality, defining standard actions for returning
 * responses and handling errors for each action.
 *
 * This kinda follows React's pattern of specifying things. This isn't
 * a class, don't try to extend it. Instead, a more specific version
 * of this will have something like this as a property, or as part of
 * a constructor.
 */
module.exports = {
    indexOne(handler) {
        return (req, res) => {
            handler(req, res)
            .then(result => {
                if (result === null) {
                    res.status(404).send("Resource Not Found");
                } else {
                    res.json(result);
                }
            })
            .catch(err => {
                console.error("Error!");
                consoel.error(err);
                res.status(500).end()
            })
        }
    },

    index(handler) {
        return (req, res) => {
            handler(req, res)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.error("Error!");
                console.error(err);
                res.status(500).end()
            })
        }
    },

    create(handler) {
        return (req, res) => {
            handler(req, res)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.error("Error!");
                console.error(err);
                res.status(500).end()
            })
        }
    },

    destroy(handler) {
        return (req, res) => {
            handler(req, res)
            .then(result => {
                if (result === 0) {
                    res.status(404).send("Resource not found.");
                } else {
                    res.json(result);
                }
            })
            .catch(err => {
                console.error("Error!");
                console.error(err);
                res.status(500).end()
            })
        }
    },

    modify(handler) {
        return (req, res) => {
            handler(req, res)
            .then(result => {
                if (result[0] === 0) {
                    res.status(404).send("Resource not found.");
                } else {
                    res.json(result);
                }
            })
            .catch(err => {
                console.error("Error!");
                console.error(err);
                res.status(500).end()
            })
        }
    },
}
