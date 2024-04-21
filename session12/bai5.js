"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}

let rectangle = new Rectangle(5, 10);
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());
let square = new Square(7);
console.log("Square Perimeter:", square.calculatePerimeter());