const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    // Get ALL
    app.get("/api/authors/view/all", AuthorController.findAllAuthors);
    // Get ONE
    app.get("/api/authors/view/:_id", AuthorController.findOneAuthor);
    // Create ONE
    app.post("/api/authors/create", AuthorController.createAuthor);
    // Delete ONE
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
    // Update ONE
    app.put("/api/authors/update/:_id", AuthorController.updateAuthor);
}
