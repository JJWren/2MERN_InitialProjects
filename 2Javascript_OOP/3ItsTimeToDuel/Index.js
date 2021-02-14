// Import Classes
const Card = require("./Card.js");
const Unit = require("./Unit.js");
const SingleEffect = require("./SingleEffect.js");
const DualTargetEffect = require("./DualTargetEffect.js");
const LegendaryUnit = require("./LegendaryUnit.js");

// Function for ease of showing both upcoming instances' stats
function letsSeeSomeStats(unitInst1, unitInst2) {
    console.log("\nLET'S SEE IT BOIIIZZZ!");
    unitInst1.showStats();
    unitInst2.showStats();
    console.log("\n");
}

// Instance of Unit Class
const red = new Unit("[[Red Belt Ninja]]", 3, 3, 4);

// Instance of a LegendaryUnit Class
const black = new LegendaryUnit(
    "[[Black Belt Ninja]]",
    4,
    5,
    4,
    "taco",
    "Pacific Punch Monster"
);

// Instance of SingleEffect Class
const hardAlgo = new SingleEffect(
    "[[Hard Algorithm]]",
    2,
    "increase target's resilience by 3",
    "resilience",
    3
);
const unhandPR = new SingleEffect(
    "[[Unhandled Promise Rejection]]",
    1,
    "reduce target's resilience by 2",
    "resilience",
    -2
);
const pairProg = new SingleEffect(
    "[[Pair Programming]]",
    3,
    "increase target's power by 2",
    "power",
    2
);

// Instance of DualTargetEffect Class
const lightningHelix = new DualTargetEffect(
    "[[Almost Lightning Helix]]",
    2,
    "damage target's defense by 3",
    "resilience",
    3,
    "heal target's health by 3",
    "resilience",
    3
);

// ========== TESTING BELOW ===========
letsSeeSomeStats(red, black);

console.log("Player 1 summons " + red.name);
console.log("Player 1 plays " + hardAlgo.name + " on " + red.name);
hardAlgo.cast(red);

letsSeeSomeStats(red, black);

console.log("Player 2 summons " + black.name);
console.log("Player 2 plays " + unhandPR.name + " on " + red.name);
unhandPR.cast(red);

letsSeeSomeStats(red, black);

console.log("Player 1 plays " + pairProg.name + " on " + red.name);
pairProg.cast(red);
console.log("Player 1 has " + red.name + " attack " + black);
red.attack(black);

letsSeeSomeStats(red, black);

console.log(
    "\nPlayer 2 plays " +
        lightningHelix.name +
        " on " +
        red.name +
        " and " +
        black.name +
        "!"
);
lightningHelix.cast(red, black);

letsSeeSomeStats(red, black);
