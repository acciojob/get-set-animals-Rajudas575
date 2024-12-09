// Base Animal class
class Animal {
    species: string;

    constructor(species: string) {
        this.species = species;
    }

    // Getter for species
    getSpecies(): string {
        return this.species;
    }

    // Method to make sound
    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat class extending Animal
class Cat extends Animal {
    constructor(species: string) {
        super(species); // Call the constructor of the parent class (Animal)
    }

    // Method to make a purring sound
    purr(): void {
        console.log('purr');
    }
}

// Dog class extending Animal
class Dog extends Animal {
    constructor(species: string) {
        super(species); // Call the constructor of the parent class (Animal)
    }

    // Method to make a barking sound
    bark(): void {
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
