// Import Classes
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    showStats() {
        console.log(this);
    }
}

module.exports = Card;
