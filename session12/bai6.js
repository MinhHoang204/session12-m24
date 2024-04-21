"use strict";
class Employee3 {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        return 0; // Lớp cơ sở này không có công thức tính lương cụ thể
    }
}

class InternEmployee extends Employee3 {
    constructor(name, role, workHour) {
        super(name, role);
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}

class OfficialEmployee extends Employee3 {
    constructor(name, role, overtimeWage) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}

let intern = new InternEmployee("Alice", "Intern", 100);
let official = new OfficialEmployee("Bob", "Official", 500000);
console.log(`${intern.name}'s salary: ${intern.calculateSalary()}`);
console.log(`${official.name}'s salary: ${official.calculateSalary()}`);