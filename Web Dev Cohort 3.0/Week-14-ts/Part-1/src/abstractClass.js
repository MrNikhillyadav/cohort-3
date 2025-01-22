"use strict";
class Shape {
    describe() {
        console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
    }
    // Implement the abstract method
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.name = "Circle";
    }
    // Implement the abstract method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
// Example usage
const circle = new Circle(10);
console.log(circle.calculateArea()); // Output the area of the circle
circle.describe(); // Describe the circle
const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea()); // Output the area of the rectangle
rectangle.describe(); // Describe the rectangle
