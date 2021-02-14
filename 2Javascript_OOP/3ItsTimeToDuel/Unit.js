// Import Classes
const Card = require("./Card.js");

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
        this.hiddenAbilTrigg = false;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.resilience = target.resilience - this.power;
            console.log(
                target.name + " was attacked for " + this.power + " damage!"
            );
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

module.exports = Unit;
