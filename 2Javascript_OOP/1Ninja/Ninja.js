class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`I'm ${this.name}!`);
    }

    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log("That sake was delicious!");
    }
}

const ninjaman = new Ninja("Ninjaman", 15);
ninjaman.sayName();
console.log("\n");
ninjaman.showStats();
console.log("\n");
ninjaman.drinkSake();
console.log("\n");
ninjaman.showStats();
