// Base class - public & private fields
class Jet {
    #secretCallSign; // private
    constructor(name, speed, range, callSign) {
        this.name = name;          // public
        this._range = range;       // "protected" (by convention)
        this.speed = speed;        // public
        this.#secretCallSign = callSign; // private
    }

    getSpecs() {
        return `${this.name} | Speed: ${this.speed} km/h | Range: ${this._range} km`;
    }

    getCallSign() {
        return `Classified CallSign: ${this.#secretCallSign}`;
    }

    takeOff() {
        return `${this.name} is launching from runway...`;
    }
}

// Fighter Jet (child class)
class FighterJet extends Jet {
    constructor(name, speed, range, callSign, stealthTech) {
        super(name, speed, range, callSign);
        this.stealthTech = stealthTech; // public
    }

    takeOff() {
        return `${this.name} (Fighter) is launching stealthily! Stealth: ${this.stealthTech}`;
    }

    engage() {
        return `${this.name} is locking targets. Ready for combat!`;
    }
}

// Bomber Jet (child class)
class BomberJet extends Jet {
    constructor(name, speed, range, callSign, payload) {
        super(name, speed, range, callSign);
        this.payload = payload; // in tons
    }

    takeOff() {
        return `${this.name} (Bomber) is rolling heavy with ${this.payload} tons of payload.`;
    }

    dropBombs() {
        return `${this.name} has dropped bombs. Target hit!`;
    }
}

// Creating instances
let su57 = new FighterJet("Su-57 Felon", 2600, 3500, "Alpha-Fox", "Low Radar Signature");
let tu160 = new BomberJet("Tu-160 Blackjack", 2200, 12000, "Blackhammer", 45);

// Using the classes
console.log(su57.getSpecs());       // Encapsulation & Abstraction
console.log(su57.takeOff());        // Polymorphism
console.log(su57.engage());
console.log(su57.getCallSign());    // Access private field safely

console.log(tu160.getSpecs());
console.log(tu160.takeOff());       // Polymorphism
console.log(tu160.dropBombs());
console.log(tu160.getCallSign());
