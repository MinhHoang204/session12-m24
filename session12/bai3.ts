// Khi sử dụng abstract class:
// Khi bạn muốn định nghĩa một bộ các phương thức mà các lớp con phải cài đặt.
// Khi bạn muốn chia sẻ logic chung giữa các lớp con.
abstract class Shape1 {
    abstract calculateArea(): number;
}
class Circle extends Shape1 {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape1 {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle1 = new Circle(5);
console.log("Diện tích hình tròn:", circle.calculateArea());
const rectangle = new Rectangle(3, 4);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());

// Khi sử dụng class thông thường:
// Khi bạn muốn tạo một đối tượng cụ thể từ lớp đó mà không cần phải kế thừa từ lớp khác.

class Person5 {
    constructor(private name: string, private age: number) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const Person4 = new Person("Alice", 30);
person.displayInfo();