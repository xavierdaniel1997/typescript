
abstract class Shape {
    abstract getArea(): number; 
  
    printArea(): void {
      console.log(`The area is: ${this.getArea()}`);
    }
  }
  
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius; 
    }
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    getArea(): number {
      return this.width * this.height; 
    }
  }

  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)];
  
  shapes.forEach((shape) => shape.printArea());
  