"use strict";
class Product1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log(`ID: ${this.id}, Tên: ${this.name}`);
    }
}

class Electronic extends Product1 {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}

class Book1 extends Product1 {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}

const electronicProduct1 = new Electronic("Điện thoại", 1, "Samsung");
const bookProduct = new Book1("Sách lập trình", 2, "John Doe");
electronicProduct1.printInfo();
bookProduct.printInfo();