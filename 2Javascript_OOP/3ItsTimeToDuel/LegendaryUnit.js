// Import Classes
const Card = require("./Card.js");
const Unit = require("./Unit.js");

class LegendaryUnit extends Unit {
    constructor(name, cost, power, resilience, prefFood, prefDrink) {
        super(name, cost, power, resilience);
        this.prefFood = prefFood;
        this.prefDrink = prefDrink;

        if (
            this.resilience < 6 &&
            this.resilience > 0 &&
            this.hiddenAbilTrigg == false
        ) {
            console.log(
                "The " +
                    this.name +
                    " eats a " +
                    this.prefFood +
                    " and gains tremendous power!"
            );
            console.log(
                "The " +
                    this.name +
                    " drinks " +
                    this.prefDrink +
                    " and shakes off all fatigue!"
            );
            this.resilience = 15;
            this.power = 15;
            this.hiddenAbilTrigg = true;
        }
    }
}

module.exports = LegendaryUnit;
