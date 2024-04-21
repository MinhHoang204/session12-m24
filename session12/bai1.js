"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên của đối tượng là: ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("gâu gâu");
    }
}

const cat = new Cat("Meo");
const dog = new Dog("Gậu");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();