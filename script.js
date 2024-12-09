//complete this code
// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method that logs the sound the animal makes
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class (extends Animal)
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Method that logs "purr" for the cat
  purr() {
    console.log("purr");
  }
}

// Dog class (extends Animal)
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Method that logs "woof" for the dog
  bark() {
    console.log("woof");
  }
}

// Example usage:

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
