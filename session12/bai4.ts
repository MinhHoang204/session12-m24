class Product1 {
    constructor(public name: string, public id: number) {}
    printInfo(): void {
        console.log(`ID: ${this.id}, Tên: ${this.name}`);
    }
}

class Electronic extends Product1 {
    constructor(name: string, id: number, public brand: string) {
        super(name, id);
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}

class Book1 extends Product1 {
    constructor(name: string, id: number, public author: string) {
        super(name, id);
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}

const electronicProduct1 = new Electronic("Điện thoại", 1, "Samsung");
const bookProduct = new Book1("Sách lập trình", 2, "John Doe");
electronicProduct.printInfo();
bookProduct.printInfo();