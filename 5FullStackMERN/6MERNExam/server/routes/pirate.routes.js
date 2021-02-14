const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    // Get ALL
    app.get("/api/pirates", PirateController.findAllPirates);
    // Get ONE
    app.get("/api/pirate/:_id", PirateController.findOnePirate);
    // Create ONE
    app.post("/api/pirate/new", PirateController.createPirate);
    // Delete ONE
    app.delete("/api/pirate/delete/:_id", PirateController.deletePirate);
    // Update ONE
    // app.put("/api/pirates/update/:_id", PirateController.updatePirate);
}