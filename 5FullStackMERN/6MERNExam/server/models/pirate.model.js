const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input a name"],
        minlength: [3, "Giv'r pirate a name ye scallywag!"]
    },
    imageURL: {
        type: String,
        required: [true, "Giv'r pirate an image... we gots t'know who'r lookin' at!"]
    },
    treasureChests: {
        type: Number,
        required: [true, "How much gold ye got?"]
    },
    catchPhrase: {
        type: String,
        required: [true, "What?! A pirates always gots somethin t'r say..."]
    },
    crewPosition: {
        type: String,
        required: [true, "W'ass a pirate withoots ez crew?"]
    },
    hasPegLeg: {
        type: Boolean,
        required: [true, "Just check or uncheck this... why is that hard?"]
    },
    hasEyePatch: {
        type: Boolean,
        required: [true, "Just check or uncheck this... why is that hard?"]
    },
    hasHookHand: {
        type: Boolean,
        required: [true, "Just check or uncheck this... why is that hard?"]
    },
}, {timestamps: true});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;