const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pirateCrew_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection to database: Successful"))
    .catch(err => console.log("Connection to database: Failed", err));