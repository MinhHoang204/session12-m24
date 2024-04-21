"use strict";
// Khi sử dụng abstract class:
// Khi bạn muốn định nghĩa một bộ các phương thức mà các lớp con phải cài đặt.
// Khi bạn muốn chia sẻ logic chung giữa các lớp con.
class Shape1 {
    calculateArea() {
        throw new Error("Method not implemented.");
    }
}
class Circle extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle1 = new Circle(5);
console.log("Diện tích hình tròn:", circle1.calculateArea());
const rectangle = new Rectangle(3, 4);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());

// Khi sử dụng class thông thường:
// Khi bạn muốn tạo một đối tượng cụ thể từ lớp đó mà không cần phải kế thừa từ lớp khác.

class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person4 = new Person5("Alice", 30);
person4.displayInfo();