// Base Animal class
class Animal {
    constructor(species) {
        this.species = species;
    }

    // Getter for species
    getSpecies() {
        return this.species;
    }

    // Method to make sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat class extending Animal
class Cat extends Animal {
    constructor(species) {
        super(species); // Call the constructor of the parent class (Animal)
    }

    // Method to make a purring sound
    purr() {
        console.log('purr');
    }
}

// Dog class extending Animal
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    // Method to make a barking sound
    bark() {
        console.log('woof');
    }
}

// Example usage:
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
