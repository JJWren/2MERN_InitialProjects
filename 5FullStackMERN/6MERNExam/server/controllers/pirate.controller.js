const Pirate = require("../models/pirate.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Welcome to Pirate Manager!"
    });
}

module.exports.findAllPirates = (req, res) => {
    Pirate.find().sort({name:1})
        .then(allPirates => res.json({pirates: allPirates}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({_id: req.params._id})
        .then(onePirate => res.json({pirate: onePirate}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({pirate: newPirate}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

module.exports.deletePirate = (req, res) => {
    Pirate.remove({_id: req.params._id})
        .then(res.json({message: "Pirate removed from database"}))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

// module.exports.updatePirate = (req, res) => {
//     Pirate.update({_id: req.params._id}, {
//         $set: {
//             name: req.body.name,
//             imageURL: req.body.imageURL,
//             treasureChests: req.body.treasureChests,
//             catchPhrase: req.body.catchPhrase,
//             crewPosition: req.body.crewPosition,
//             hasPegLeg: req.body.hasPegLeg,
//             hasEyePatch: req.body.hasEyePatch,
//             hasHookHand: req.body.hasHookHand,
//         }
//     }, {runValidators: true})
//         .then(newPirate => res.json({pirate: newPirate}))
//         .catch(err => res.json({message: "Something went wrong...", error: err}))
// }
