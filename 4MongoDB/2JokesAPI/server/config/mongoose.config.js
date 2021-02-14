const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokesDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("It's alive!")).catch(err=>console.log("Oh no... ", err));