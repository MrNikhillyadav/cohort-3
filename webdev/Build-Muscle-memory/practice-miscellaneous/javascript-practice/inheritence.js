// prototypal inheritance

const animal = {
  speak(){
    console.log(`${this.name} ${this.sound} loud!`)
  }
}

const dog = Object.create(animal)
dog.sound = "barks"
dog.name = "husky"
dog.speak() //husky barks loud!

const cat = Object.create(animal)
cat.name = "merry"
cat.sound = "mews"
cat.speak()    // merry mews loud!


// class inheritance

class Employee {
  
  constructor(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession
  }
  
  intro(){
    console.log(`Hi! I'm ${this.name}.`)
    console.log( `I'm ${this.age}yrs old.`)
    console.log( `I'm a ${this.profession} by profession.`)
  }
  
}

const emp1 = new Employee("Ram", "19", "SDE");
emp1.intro();

const emp2 = new Employee("Karan", "21", "Product Manager");
emp2.intro();




class Student extends Employee {
  
  constructor(name, age,profession, standard) {
    super(name, age, profession)
    this.standard = standard;
  }
  
  greeting (){
    console.log(`Greeting! from ${this.name} of class  ${this.standard} `)
  }
  
}

const student1 = new Student("Rohan", 8, "student", "1st")
student1.intro()
student1.greeting()





// ---- Static variables ---------

class Employee {
  
  // static variable: shared across all employees
  static companyName = 'Acme Corp'
  static count = 0
  
  constructor(name, age, profession) {
    this.name = name
    this.age = age
    this.profession = profession
    Employee.count++   // update shared counter
  }

  intro() {
    console.log(`Hi! I'm ${this.name} from ${Employee.companyName}.`)
  }
  
  static getSum(){
    console.log(`Total Employees: ${Employee.count}`)
  }

  // static method: called on the class
  static howManyEmployees() {
    console.log(`We have ${Employee.count} employees.`)
  }
}

const e1 = new Employee('Ram', 19, 'SDE')
const e2 = new Employee('Karan', 21, 'Product Manager')
e1.intro()
e2.intro()

Employee.howManyEmployees()   // OK
Employee.getSum()           // OK

e1.howManyEmployees()      // ❌ TypeError: not on instances
e1.getSum()               // ❌ TypeError: not on instances

