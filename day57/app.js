// Creating an object using constructor function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getDetails = function() {
        return this.brand + " " + this.model + " (" + this.year + ")";
    };
}

// Creating objects
let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2022);

// Accessing properties
car1.brand;      // "Toyota"
car2.model;      // "Civic"

// Calling method
car1.getDetails(); // "Toyota Corolla (2020)"
car2.getDetails(); // "Honda Civic (2022)"


// FighterJet class using ES6 class syntax
class FighterJet {
    constructor(name, speed, range) {
        this.name = name;
        this.speed = speed; // in km/h
        this.range = range; // in km
    }

    getSpecs() {
        return this.name + " flies at " + this.speed + " km/h with a range of " + this.range + " km.";
    }
}

// Creating some fighter jet objects
let jet1 = new FighterJet("F-22 Raptor", 2410, 2960);
let jet2 = new FighterJet("Su-57 Felon", 2600, 3500);

// Accessing their properties
jet1.name;        // "F-22 Raptor"
jet2.speed;       // 2600

// Getting full specs
jet1.getSpecs();  // "F-22 Raptor flies at 2410 km/h with a range of 2960 km."
jet2.getSpecs();  // "Su-57 Felon flies at 2600 km/h with a range of 3500 km."
