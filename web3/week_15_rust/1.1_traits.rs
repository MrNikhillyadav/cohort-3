use std::f32::consts::PI;

trait Shape {
    fn area(&self) -> f32;
    fn perimeter(&self) -> f32;
}

struct Rect {
    width: f32,
    height: f32,
}

struct Circle {
    radius: f32,
}

impl Shape for Rect {
    fn area(&self) -> f32 {
        self.width * self.height
    }

    fn perimeter(&self) -> f32 {
        2.0 * (self.width + self.height)
    }
}

impl Shape for Circle {
    fn area(&self) -> f32 {
        PI * self.radius * self.radius
    }

    fn perimeter(&self) -> f32 {
        2.0 * PI * self.radius
    }
}

fn main() {
    let r: Rect = Rect {
        width: 10.0,
        height: 20.0,
    };

    
    println!("rect area :{}", r.area());
    println!("rect perimeter : {}", r.perimeter());
    
    let c : Circle = Circle{
        radius : 4.0,
    };

    println!("circle area :{}", c.area());
    println!("circle perimeter : {}", c.perimeter());

    // Even better, making and calling a generic function
    println!("rect (area, perimeter) : {:?}", get_perimeter_and_area(&r)); 
    println!("circle (area, perimeter) : {:?}", get_perimeter_and_area(&c));

}

/*
    Note : If we want our arguments to be either circle | rectangle | something (either a or b or c ) 
    then we can do something like this ( passing impl Shape ).
*/
fn get_perimeter_and_area(shape : &impl Shape)-> (f32,f32) {
   return (shape.area(), shape.perimeter()); // no return keyword needed, can remove it
}

// another syntax to do the same is by using Generics :

fn get_perimeter_and_area <T:Shape> (shape :T )-> (f32,f32) {
   return (shape.area(), shape.perimeter()); 
}