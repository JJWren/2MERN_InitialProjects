// Import Classes
const Card = require("./Card.js");
const Unit = require("./Unit.js");

class SingleEffect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    cast(target) {
        if (target instanceof Unit) {
            console.log(this.name + " has been cast on " + target.name + "...");
            console.log("Effect Text: " + this.text);
            if ((this.stat = "resilience")) {
                target.resilience += this.magnitude;
            } else if ((this.stat = "power")) {
                target.power += this.magnitude;
            } else {
                throw new Error(
                    "Instance requires a valid target stat: {resilience || power}"
                );
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

module.exports = SingleEffect;
