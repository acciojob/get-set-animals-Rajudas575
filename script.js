//complete this code
class Animal {

	species: string;

    constructor(species: string) {
        this.species = species;
    }

    getSpecies(): string {
        return this.species;
    }

    makeSound(): void {
        console.log(`The ${this.species} makes a sound`);
    }
	
}

class Dog extends Animal {
	constructor(species: string) {
        super(species);
    }

	bark(): void {
        console.log("woof");
    }
}

class Cat extends Animal {
	constructor(species: string) {
        super(species);
    }

	purr(): void {
        console.log("purr");
    }
}

const myCat = new Cat("Siamese");
myCat.makeSound(); 
myCat.purr();      

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); 
myDog.bark(); 


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
