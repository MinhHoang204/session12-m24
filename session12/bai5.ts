abstract class Quadrangle {
    protected width: number;
    protected height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    abstract calculatePerimeter(): number;
}
class Rectangle1 extends Quadrangle {
    constructor(width: number, height: number) {
        super(width, height);
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Square extends Quadrangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }
    calculatePerimeter(): number {
        return 4 * this.width;
    }
}

let Rectangle = new Rectangle1(5, 10);
console.log("Rectangle Perimeter:", Rectangle1.calculatePerimeter());
let square1 = new Square(7);
console.log("Square Perimeter:", square.calculatePerimeter());