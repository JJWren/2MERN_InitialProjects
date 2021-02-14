const { db, aggregate } = require("../models/jokes.model");
const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

module.exports.updateOneJoke = (req, res) => {
    Joke.updateOne({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke => res.json({joke: deletedJoke}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
}

module.exports.findRandomJoke = (req, res) => {
    // Get the count of all jokes
    Joke.countDocuments().exec(function (err, count) {

        // Get a random entry
        let random = Math.floor(Math.random() * count)
    
        // Again query all jokes but only fetch one offset by our random #
        Joke.findOne().skip(random).then(result => res.json({joke: result}))
        .catch(err => res.json({message: "Something went wrong", error:err}));
    })
}