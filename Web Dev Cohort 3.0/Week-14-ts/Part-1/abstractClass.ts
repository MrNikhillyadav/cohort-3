abstract class Shape {
          abstract name: string;
        
          abstract calculateArea(): number;
        
          describe(): void {
              console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
          }
      }
      
      class Rectangle extends Shape {
          name = "Rectangle";
        
          constructor(public width: number, public height: number) {
              super();
          }
        
          // Implement the abstract method
          calculateArea(): number {
              return this.width * this.height;
          }
      }
      
      class Circle extends Shape {
          name = "Circle";
      
          constructor(public radius: number) {
              super();
          }
      
          // Implement the abstract method
          calculateArea(): number {
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