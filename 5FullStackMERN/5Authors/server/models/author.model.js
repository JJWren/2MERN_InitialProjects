const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input a name"],
        minlength: [3, "Name must have at least 3 characters"]
    },
    quote: {
        type: String,
        required: [true, "Please input a quote by the author"],
        minlength: [3, "Quotes must be at least 3 characters"]
    }
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;