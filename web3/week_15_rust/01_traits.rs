use std::f32::consts::PI;

//trait is a blueprint
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

}
