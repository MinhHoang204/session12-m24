abstract class Person3 {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class student2 extends Person3 {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}, Tên: ${this.name}`);
    }
}

class Teacher extends Person3 {
    private subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}

const student1 = new Student("Nguyen Van A", 123);
student.displayInfo();
const teacher = new Teacher("Tran Thi B", "Toan");
teacher.displayInfo();