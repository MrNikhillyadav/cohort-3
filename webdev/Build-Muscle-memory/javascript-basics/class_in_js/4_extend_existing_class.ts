// Base class (Parent)
class Employee {
  protected name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getDetails(): string {
    return `${this.name} earns $${this.salary}`;
  }

  // Static method
  static companyName = "TechCorp";
}

// Extended class (Child) - Manager "is an" Employee
class Manager extends Employee {
  private teamSize: number;

  constructor(name: string, salary: number, teamSize: number) {
    // ✅ MUST call super() FIRST in child constructor
    super(name, salary);  
    this.teamSize = teamSize;
  }

  // Override parent method
  getDetails(): string {
    // ✅ super.methodName() calls parent's version
    return `${super.getDetails()} and manages ${this.teamSize} people`;
  }

  // New manager-specific method
  giveRaise(): void {
    this.salary += 5000;
  }
}

// Usage
const emp = new Employee("Alice", 50000);
console.log(emp.getDetails()); 
// "Alice earns $50000"

const mgr = new Manager("Bob", 80000, 5);
console.log(mgr.getDetails());
// "Bob earns $80000 and manages 5 people"

mgr.giveRaise();
console.log(mgr.getDetails());
// "Bob earns $85000 and manages 5 people"


//Summary: extends = inheritance, super() = "call parent version" 