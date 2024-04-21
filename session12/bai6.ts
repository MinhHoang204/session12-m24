class Employee3 {
    protected name: string;
    protected role: string;
    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }
    calculateSalary(): number {
        return 0; // Lớp cơ sở này không có công thức tính lương cụ thể
    }
}

class InternEmployee extends Employee {
    private workHour: number;
    constructor(name: string, role: string, workHour: number) {
        super(name, role);
        this.workHour = workHour;
    }
    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

class OfficialEmployee extends Employee {
    private overtimeWage: number;
    constructor(name: string, role: string, overtimeWage: number) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }
    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

let intern = new InternEmployee("Alice", "Intern", 100);
let official = new OfficialEmployee("Bob", "Official", 500000);
console.log(`${intern.name}'s salary: ${intern.calculateSalary()}`);
console.log(`${official.name}'s salary: ${official.calculateSalary()}`);