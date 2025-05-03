// Base constructor (Encapsulation)
function RussianAircraft(name, speed, range) {
    this.name = name;
    this.speed = speed;   // in km/h
    this.range = range;   // in km
}

// Abstraction through prototype methods
RussianAircraft.prototype.getSpecs = function() {
    return this.name + " | Speed: " + this.speed + " km/h | Range: " + this.range + " km";
};

RussianAircraft.prototype.takeOff = function() {
    return this.name + " is launching from the airbase!";
};

// Inheritance (Tu-160 inherits from RussianAircraft)
function BomberJet(name, speed, range, payload) {
    RussianAircraft.call(this, name, speed, range); // call parent constructor
    this.payload = payload; // in tons
}

// Link prototypes (Inheritance)
BomberJet.prototype = Object.create(RussianAircraft.prototype);

// Polymorphism (override takeOff)
BomberJet.prototype.takeOff = function() {
    return this.name + " bomber is taking off with payload of " + this.payload + " tons.";
};

// Unique method for bombers
BomberJet.prototype.dropBombs = function() {
    return this.name + " is dropping heavy ordinance!";
};

// Another subclass — FighterJet
function FighterJet(name, speed, range, stealth) {
    RussianAircraft.call(this, name, speed, range);
    this.stealth = stealth;
}

FighterJet.prototype = Object.create(RussianAircraft.prototype);

FighterJet.prototype.takeOff = function() {
    return this.name + " fighter jet is taking off stealthily!";
};

FighterJet.prototype.activateStealth = function() {
    return this.name + " stealth mode activated: " + this.stealth;
};

// Creating instances
let su57 = new FighterJet("Su-57 Felon", 2600, 3500, "Low Radar Signature");
let tu160 = new BomberJet("Tu-160 Blackjack", 2220, 12500, 45); // 45 tons payload
let su35 = new FighterJet("Su-35 Flanker-E", 2400, 3600, "Medium");

// Usage
su57.getSpecs();        // "Su-57 Felon | Speed: 2600 km/h | Range: 3500 km"
su57.takeOff();         // "Su-57 Felon fighter jet is taking off stealthily!"
su57.activateStealth(); // "Su-57 Felon stealth mode activated: Low Radar Signature"

tu160.getSpecs();       // "Tu-160 Blackjack | Speed: 2220 km/h | Range: 12500 km"
tu160.takeOff();        // "Tu-160 Blackjack bomber is taking off with payload of 45 tons."
tu160.dropBombs();      // "Tu-160 Blackjack is dropping heavy ordinance!"
