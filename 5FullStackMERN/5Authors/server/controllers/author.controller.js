const Author = require("../models/author.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Welcome to Author Manager!"
    });
}

module.exports.findAllAuthors = (req, res) => {
    Author.find().sort({name:1})
        .then(allAuths => res.json({authors: allAuths}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuth => res.json({author: oneAuth}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuth => res.json({author: newAuth}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.deleteAuthor = (req, res) => {
    Author.remove({_id: req.params._id})
        .then(res.json({message: "Author removed from database"}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.updateAuthor = (req, res) => {
    Author.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            quote: req.body.quote,
        }
    }, {runValidators: true})
        .then(newAuth => res.json({author: newAuth}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}