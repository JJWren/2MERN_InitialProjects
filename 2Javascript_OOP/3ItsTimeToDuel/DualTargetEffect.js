// Import Classes
const Card = require("./Card.js");
const Unit = require("./Unit.js");

class DualTargetEffect extends Card {
    constructor(
        name,
        cost,
        text1,
        stat1,
        magnitude1,
        text2,
        stat2,
        magnitude2
    ) {
        super(name, cost);
        this.text1 = text1;
        this.stat1 = stat1;
        this.magnitude1 = magnitude1;
        this.text2 = text2;
        this.stat2 = stat2;
        this.magnitude2 = magnitude2;
    }

    cast(target1, target2) {
        if (target1 instanceof Unit && target2 instanceof Unit) {
            console.log(
                this.name + " has been cast and targets the following:"
            );
            console.log(
                "{\n Target 1: " +
                    target1.name +
                    "\n Target 2: " +
                    target2.name +
                    "\n}"
            );

            console.log("First Effect: " + this.text1);
            if ((this.stat1 = "resilience")) {
                target1.resilience += this.magnitude1;
            } else if ((this.stat1 = "power")) {
                target1.power += this.magnitude1;
            } else {
                throw new Error(
                    "Instance requires a valid target stat: {resilience || power}"
                );
            }
            console.log("Second Effect: " + this.text2);
            if ((this.stat2 = "resilience")) {
                target2.resilience += this.magnitude2;
            } else if ((this.stat2 = "power")) {
                target2.power += this.magnitude2;
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

module.exports = DualTargetEffect;
