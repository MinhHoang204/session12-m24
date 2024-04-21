class Person3 {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        throw new Error("Method not implemented.");
    }
}

class student2 extends Person3 {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Tên: ${this.name}`);
    }
}

class Teacher extends Person3 {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}

const student1 = new Student("Nguyen Van A", 123);
student.displayInfo();
const teacher = new Teacher("Tran Thi B", "Toan");
teacher.displayInfo();
