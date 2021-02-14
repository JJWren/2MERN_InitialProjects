class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("I'm " + this.name + "!");
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " takes a long, slow sip of sake...");
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log(
            "What one programmer can do in one month, two programmers can do in two months."
        );
    }
}

const ninjaman = new Ninja("Ninjaman", 15);
ninjaman.sayName();
ninjaman.showStats();
ninjaman.drinkSake();
ninjaman.showStats();
console.log("");
const ratNinja = new Sensei("Master Splinter");
ratNinja.showStats();
ratNinja.speakWisdom();
ratNinja.showStats();
